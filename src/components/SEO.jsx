import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, url, image }) => (
  <Helmet>
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <title>{title}</title>
  </Helmet>
);

export default SEO;
