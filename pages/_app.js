import Layout from "../components/Layout";
import "./global.css";
import "./bootstrap.css";
import "./mdl.css";
import "./antd.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
