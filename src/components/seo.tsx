// seo.tsx
import React from "react";
import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImageUrl?: string;
};

const SEO = ({ title, description, canonicalUrl, ogImageUrl }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
    </Head>
  );
};

export default SEO;
