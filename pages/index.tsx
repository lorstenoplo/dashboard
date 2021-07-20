import Head from "next/head";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";
import { Submenu } from "../components/Submenu";
import { ProductsType } from "../types/Products";

type Props = {
  products: ProductsType;
};

export default function Home({ products }: Props) {
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
      <Submenu products={products} />
      <Main />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://goloop-micro-products.vercel.app/api/products"
  );

  const { products } = await data.json();

  return {
    props: {
      products,
    },
  };
}
