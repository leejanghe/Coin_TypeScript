const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((response) => response.json());
}

export function fetchCoinHistoryPrice(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((response) => response.json());
}

// options={{
//     theme: {
//       mode: "dark",
//     },
//     chart: {
//       height: 300,
//       width: 500,
//       toolbar: {
//         show: false,
//       },
//       background: "transparent",
//     },
//     grid: { show: false },
//     stroke: {
//       curve: "smooth",
//       width: 4,
//     },
//     yaxis: {
//       show: false,
//     },
//     xaxis: {
//       axisBorder: { show: false },
//       axisTicks: { show: false },
//       labels: { show: false },
//       type: "datetime",
//       categories: data?.map((price) => price.time_close),
//     },
//     fill: {
//       type: "gradient",
//       gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
//     },
//     colors: ["#0fbcf9"],
//     tooltip: {
//       y: {
//         formatter: (value) => `$${value.toFixed(2)}`,
//       },
//     },
//   }}
