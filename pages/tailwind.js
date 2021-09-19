import "tailwindcss/tailwind.css";
import Head from "next/head";
import TailwindPage from "../components/TailwindPage";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TailwindPage />
    </div>
  );
}
