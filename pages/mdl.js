import "material-design-lite/material.min.css";
//import "material-design-lite/material.min.js"
import Head from "next/head";
import MDLPage from "../components/MDLPage";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MDLPage />
    </div>
  );
}
