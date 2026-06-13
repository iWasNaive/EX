const axios = require("axios");

exports.convert = async (req, res) => {
  // const { amount, from, to } = req.body;

  const response = await axios.get(
    `https://api.frankfurter.app/latest?from=AUD&to=CAD`,
  );

  const rate = response.data.rates[to];

  console.log(rate);
};
