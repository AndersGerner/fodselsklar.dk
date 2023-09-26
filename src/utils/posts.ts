import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

interface FrontMatter {
  publishDate: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  tags: string[];
}

interface Content {
  slug: string;
  content: string;
  publishDate: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  tags: string[];
}

const BLOG_DIR = join(process.cwd(), 'src/content/blog');
const SERVICES_DIR = join(process.cwd(), 'src/content/ydelser');

const load = async (dir: string): Promise<Content[]> => {
  const files = fs.readdirSync(dir);

  const contents = await Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace('.md', '');
        return await findContentBySlug(slug, dir);
      }),
  );

  return contents.filter((content): content is Content => content !== null);
};

let _posts: Promise<Content[]> | null = null;
let _services: Promise<Content[]> | null = null;

export const fetchPosts = async (): Promise<Content[]> => {
  _posts = _posts || load(BLOG_DIR);
  return await _posts;
};

export const fetchServices = async (): Promise<Content[]> => {
  _services = _services || load(SERVICES_DIR);
  return await _services;
};

export const findLatestPosts = async ({ count }: { count?: number } = {}): Promise<Content[]> => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts.slice(_count * -1);
};

export const findLatestServices = async ({ count }: { count?: number } = {}): Promise<Content[]> => {
  const _count = count || 4;
  const services = await fetchServices();
  return services.slice(_count * -1);
};

export const findContentBySlug = async (slug: string, dir: 'blog' | 'ydelser'): Promise<Content | null> => {
  if (!slug) return null;
  const directory = dir === 'blog' ? BLOG_DIR : SERVICES_DIR;
  try {
    const readFile = fs.readFileSync(join(directory, `${slug}.md`), 'utf-8');
    const { data, content } = matter(readFile);
    return {
      slug,
      content,
      ...data,
    } as Content;
  } catch (e) {
    console.error(`An error occurred while fetching content by slug: ${e}`);
    return null;
  }
};

export const findPostsByIds = async (ids: string[]): Promise<Content[]> => {
  return findContentByIds(ids, BLOG_DIR);
};

export const findServicesByIds = async (ids: string[]): Promise<Content[]> => {
  return findContentByIds(ids, SERVICES_DIR);
};

export const findContentByIds = async (ids: string[], dir: string): Promise<Content[]> => {
  if (!Array.isArray(ids)) return [];

  const content = dir === BLOG_DIR ? await fetchPosts() : await fetchServices();

  return ids.reduce((result: Content[], id: string) => {
    content.some((item) => {
      if (id === item.id) {
        result.push(item);
      }
    });
    return result;
  }, []);
};
