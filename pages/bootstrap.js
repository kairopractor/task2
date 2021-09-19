import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import BootstrapPage from "../components/BootstrapPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BootstrapPage />
    </>
  );
}
