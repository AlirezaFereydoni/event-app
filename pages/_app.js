import "../styles/globals.css";
import Layout from "../components/layout/layout.jsx";
import Head from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next m Events App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
