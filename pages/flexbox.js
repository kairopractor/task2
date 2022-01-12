import FlexPage from "../components/FlexBoxPage";
import Head from "next/head";
import Breadcrumbs from "../components/Breadcrumbs";

const breadcrumbs = [
  {
    key: "home",
    path: "/",
    name: "HOME"
  },
  {
    key: "bootstrap",
    path: "/bootstrap",
    name: "BOOTSTRAP"
  },
]

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FlexBox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs breadcrumbs = {breadcrumbs} />
      <FlexPage />
    </div>
  );
}
