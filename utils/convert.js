const axios = require("axios");
const NodeCache = require("node-cache");

const myChache = new NodeCache({ stdTTL: 10 });

module.exports = async (amount, from, to) => {
  const cacheKey = `${from}-${to}`;

  try {
    const chacheRate = NodeCache.get(cacheKey);
    console.log(chacheRate);

    // if (chacheRate) {
    // }

    // const response = await axios.get(
    //   `https://api.frankfurter.app/latest?from=${from}&to=${to}`,
    // );

    // const convertAmount = amount * response.data.rates[to];

    // return convertAmount;
  } catch (error) {}
};
