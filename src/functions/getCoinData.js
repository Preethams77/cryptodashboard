// import axios from "axios";

// export const getCoinData = (id) => {
//   const myData = axios
//     .get(`https://api.coingecko.com/api/v3/coins/${id}`, { crossDomain: true })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log("ERROR>>>", error);
//     });
//   return myData;
// };

import axios from "axios";

const API_KEY = "CG-H1xiSgtgteP9v7oegURUdKzK"; // Replace with your actual API key

export const getCoinData = async (id) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
      params: {
        x_cg_demo_api_key: API_KEY, // API key added here
      },
    });

    return response.data;
  } catch (error) {
    console.error("ERROR>>>", error);
    return null; // Return null if there's an error to prevent app crashes
  }
};
