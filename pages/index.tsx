import Head from "next/head";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";
import { Submenu } from "../components/Submenu";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <Head>
        <title>Goloop | Dashboard</title>
        <link
          rel="shortcut icon"
          href="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          type="image/svg"
        />
      </Head>

      <Sidebar />
      <Submenu />
      <Main />
    </div>
  );
}
