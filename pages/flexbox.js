import FlexPage from "../components/FlexBoxPage";
import Head from "next/head";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FlexBox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexPage />
    </div>
  );
}
