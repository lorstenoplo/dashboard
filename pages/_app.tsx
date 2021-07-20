import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../css/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
