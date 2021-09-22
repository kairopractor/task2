import Head from "next/head";
import IndexPage from "../components/IndexPage";
import Breadcrumbs from "../components/Breadcrumbs";

const breadcrumbs = [
  {
    key: "home",
    path: "/",
    name: "HOME"
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>CSS Frameworks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs breadcrumbs = {breadcrumbs}/>

      <IndexPage />
    </>
  );
}
