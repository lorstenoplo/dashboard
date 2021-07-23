import React from "react";
import { AppProps } from "next/app";

import { reducer } from "../context/reducer";
import { initialState, StateProvider } from "../context/StateProvider";

import { QueryClientProvider } from "react-query";
import { queryClient } from "../utils/queryClient";

import "tailwindcss/tailwind.css";
import "../css/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </StateProvider>
  );
}

export default MyApp;
