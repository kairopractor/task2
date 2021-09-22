import "material-design-lite/material.min.css";
//import "material-design-lite/material.min.js"
import Head from "next/head";
import MDLPage from "../components/MDLPage";
import Breadcrumbs from "../components/Breadcrumbs";

const breadcrumbs = [
  {
    key: "home",
    path: "/",
    name: "HOME"
  },
  {
    key: "mdl",
    path: "/mdl",
    name: "MDL"
  },
]

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSS Frameworks | MDL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs breadcrumbs = {breadcrumbs}/>
      <MDLPage />
    </div>
  );
}
