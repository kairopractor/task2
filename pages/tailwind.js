import "tailwindcss/tailwind.css";
import Head from "next/head";
import TailwindPage from "../components/TailwindPage";
import Breadcrumbs from "../components/Breadcrumbs";

const breadcrumbs = [
  {
    key: "home",
    path: "/",
    name: "HOME",
  },
  {
    key: "tailwind",
    path: "/tailwind",
    name: "TAILWIND",
  },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSS Frameworks | TailWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <TailwindPage />
    </div>
  );
}
