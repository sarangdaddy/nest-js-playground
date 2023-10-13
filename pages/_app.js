import "../styles/globals.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
};

export default MyApp;
