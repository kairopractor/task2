import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import BootstrapPage from "../components/BootstrapPage";
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
    <>
      <Head>
        <title>CSS Frameworks | Bootstrap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs breadcrumbs = {breadcrumbs}/>
      <BootstrapPage />
    </>
  );
}
