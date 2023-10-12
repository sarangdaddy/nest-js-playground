import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        Layout
      </Layout>
      <style jsx global>{`
        .active {
          color: blue;
        }
        nav a {
          color: tomato;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
