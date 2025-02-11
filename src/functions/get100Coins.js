// import axios from "axios";

// export const get100Coins = () => {
//   const myCoins = axios
//     .get(
//       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//     )
//     .then((response) => {
//       console.log("RESPONSE>>>", response);
//       return response.data;
//     })
//     .catch((error) => {
//       console.log("ERROR>>>", error);
//     });

//   return myCoins;
// };

import axios from "axios";

const API_KEY = "CG-H1xiSgtgteP9v7oegURUdKzK"; // Replace with your actual API key

export const get100Coins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
          x_cg_demo_api_key: API_KEY, // API key added here
        },
      }
    );

    console.log("RESPONSE>>>", response.data);
    return response.data;
  } catch (error) {
    console.error("ERROR>>>", error);
    return [];
  }
};
