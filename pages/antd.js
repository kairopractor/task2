import "antd/dist/antd.css";
import { Layout } from "antd";
import AntdPage from "../components/ANTDPage";

import Head from "next/head";
const { Header, Footer, Sider, Content } = Layout;
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AntdPage />
    </div>
  );
}
