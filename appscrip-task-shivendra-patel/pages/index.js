// pages/index.js
import Head from "next/head";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Shop Smart | Product Listing Page</title>
        <meta
          name="description"
          content="Explore a wide range of products with SSR, responsive design, and SEO optimization."
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProductCollection",
              "name": "Shop Smart Product List",
              "description": "A product listing page built using Next.js with SSR and SEO.",
              "url": "https://your-netlify-or-vercel-site.com",
            }),
          }}
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <header className="header">
           <Header />
        </header>

        <section className="product-section">
          <ProductGrid products={products} />
        </section>
        <Footer className="footer">
        </Footer>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { props: { products } };
}

