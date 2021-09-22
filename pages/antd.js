import "antd/dist/antd.css";
import AntdPage from "../components/ANTDPage";
import Breadcrumbs from "../components/Breadcrumbs";
import Head from "next/head";

const breadcrumbs = [
  {
    key: "home",
    path: "/",
    name: "HOME",
  },
  {
    key: "antd",
    path: "/antd",
    name: "ANTD",
  },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSS Frameworks | AntD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <AntdPage />
    </div>
  );
}
