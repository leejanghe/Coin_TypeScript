import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  isDark: boolean;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ isDark }: ChartProps) {
  const params = useParams();
  //   console.log(params);
  const { coinId } = params;
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId ? coinId : ""),
    {
      refetchInterval: 10000,
    }
  );

  const exceptData = data ?? [];
  const chartData = exceptData.map((ohlcv) => ({
    x: new Date(ohlcv.time_open),
    y: [ohlcv.open, ohlcv.high, ohlcv.low, ohlcv.close],
  }));

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: chartData,
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              id: "candles",
              toolbar: {
                autoSelected: "pan",
                show: false,
              },
              background: "transparent",
              zoom: {
                enabled: false,
              },
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
