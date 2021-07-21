import { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";
import { reducer } from "../context/reducer";
import { initialState, StateProvider } from "../context/StateProvider";
import "../css/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
