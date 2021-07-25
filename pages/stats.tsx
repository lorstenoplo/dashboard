import { NextPage } from "next";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { candleChartOptions } from "../ChartData/candle";
const ReactApexChart = dynamic(import("react-apexcharts"), { ssr: false });
// import ReactApexChart from "react-apexcharts";

const Stats: NextPage = () => {
  return (
    <div className="flex h-screen">
      <Head>
        <title>Stats</title>
      </Head>
      <Sidebar />
      <div className="p-4 flex-auto overflow-x-hidden">
        <ReactApexChart
          options={candleChartOptions.options}
          series={candleChartOptions.series}
          type="candlestick"
          height={560}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Stats;
