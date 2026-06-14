const axios = require("axios");
const NodeCache = require("node-cache");

const myChache = new NodeCache({ stdTTL: 10 });

module.exports = async (from, to) => {
  const cacheKey = `${from}-${to}`;

  try {
    const chacheRate = myChache.get(cacheKey);

    if (chacheRate) {
      return {
        msg: "from cache",
        rate: chacheRate,
      };
    }

    const response = await axios.get(
      `https://api.frankfurter.app/latest?from=${from}&to=${to}`,
    );

    const rate = response.data.rates[to];

    myChache.set(cacheKey, rate);

    return {
      msg: "from server",
      rate,
    };
  } catch (error) {
    throw error;
  }
};
