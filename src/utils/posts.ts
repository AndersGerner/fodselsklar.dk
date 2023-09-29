import fs from 'fs';
import matter from 'gray-matter';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';
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
  authors: Author[];
  keywords: string[];
  category: string;
}

const BLOG_DIR = join(process.cwd(), 'src/content/blog');
const SERVICES_DIR = join(process.cwd(), 'src/content/ydelser');

const load = async (dir: 'blog' | 'ydelser'): Promise<Content[]> => {
  const directory = dir === 'blog' ? BLOG_DIR : SERVICES_DIR;
  const files = fs.readdirSync(directory);

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
  _posts = _posts || load('blog');
  return await _posts;
};

export const fetchServices = async (): Promise<Content[]> => {
  _services = _services || load('ydelser');
  return await _services;
};

export const findLatestPosts = async ({ count }: { count?: number } = {}): Promise<Content[]> => {
  const _count = count || 20;
  const posts = await fetchPosts();
  return posts.slice(_count * -1);
};

export const findLatestServices = async ({ count }: { count?: number } = {}): Promise<Content[]> => {
  const _count = count || 20;
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
