// import axios from "axios";

// export const getCoinPrices = (id, days, priceType) => {
//   const prices = axios
//     .get(
//       `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
//       { crossDomain: true }
//     )
//     .then((response) => {
//       console.log("Prices>>>>", response.data);
//       return response.data[priceType];
//     })
//     .catch((error) => {
//       console.log("ERROR>>>", error);
//     });
//   return prices;
// };

import axios from "axios";

const API_KEY = "CG-H1xiSgtgteP9v7oegURUdKzK"; // Replace with your actual API key

export const getCoinPrices = async (id, days, priceType) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: days,
          interval: "daily",
          x_cg_demo_api_key: API_KEY, // API key added here
        },
      }
    );

    console.log("Prices>>>>", response.data);
    return response.data[priceType];
  } catch (error) {
    console.error("ERROR>>>", error);
    return null; // Return null to prevent app crashes
  }
};
