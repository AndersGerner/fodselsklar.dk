import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Custom404: React.FC = () => {
  try {
    return (
      <>
        {/* SEO Metadata */}
        <Head>
          <title>Siden findes ikke</title>
          <meta name="description" content="Siden du søger findes ikke" />
          {/* Add JSON-LD for structured data here */}
        </Head>

        {/* Main Content */}
        <div className="container mx-auto h-screen flex flex-col justify-center items-center">
          <h1 className="text-6xl font-semibold text-gray-800">Ups</h1>
          <p className="text-xl mt-4 text-gray-600">Siden findes ikke</p>
          <Link href="/">
            <p className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Gå tilbage til forsiden</p>
          </Link>
        </div>
      </>
    );
  } catch (error) {
    console.error('An error occurred while rendering the 404 page:', error);
    return <div>An error occurred.</div>;
  }
};

export default Custom404;
