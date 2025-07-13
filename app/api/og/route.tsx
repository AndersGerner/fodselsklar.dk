import { ImageResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const font = fetch(
  new URL('../../../public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  try {
    const fontData = await font;
    const { searchParams } = new URL(request.url);

    // Get dynamic parameters
    const title = searchParams.get('title') || 'Mental Ro - Fødselsklar A-Z';
    const subtitle = searchParams.get('subtitle') || 'Certificeret Doula i Danmark';
    const author = searchParams.get('author') || 'Camilla Holsted';
    const type = searchParams.get('type') || 'default';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            backgroundImage: 'linear-gradient(to bottom right, #e0f2fe, #f0f9ff)',
          }}
        >
          {/* Pattern overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              opacity: 0.1,
            }}
          />
          
          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              maxWidth: '1000px',
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  marginRight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                MR
              </div>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#1e293b',
                }}
              >
                Mental Ro
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: type === 'blog' ? '56px' : '64px',
                fontWeight: 'bold',
                color: '#0f172a',
                textAlign: 'center',
                lineHeight: 1.2,
                marginBottom: '20px',
                maxWidth: '900px',
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                style={{
                  fontSize: '24px',
                  color: '#475569',
                  textAlign: 'center',
                  marginBottom: '40px',
                  maxWidth: '800px',
                }}
              >
                {subtitle}
              </p>
            )}

            {/* Author/Type badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              {type === 'blog' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(14, 165, 233, 0.1)',
                    padding: '10px 20px',
                    borderRadius: '50px',
                  }}
                >
                  <span style={{ color: '#0891b2', fontSize: '18px' }}>
                    Af {author}
                  </span>
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '10px 20px',
                  borderRadius: '50px',
                }}
              >
                <span style={{ color: '#059669', fontSize: '18px' }}>
                  {type === 'blog' ? 'Blog Post' : 'Doula Services'}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                position: 'absolute',
                bottom: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
              }}
            >
              <span style={{ color: '#64748b', fontSize: '18px' }}>
                mentalro.vercel.app
              </span>
              <span style={{ color: '#64748b', fontSize: '18px' }}>
                📞 +45 22 59 49 03
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}