import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  jsonLd?: object;
}

const SEO = ({ title, description, jsonLd }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;