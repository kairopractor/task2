import Head from "next/head";
import IndexPage from "../components/IndexPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexPage />
    </>
  );
}
