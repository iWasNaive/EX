const convert = require("./../utils/convert");
const nodeCache = require("node-cache");

const myCach = new nodeCache({ stdTTL: 5 });

exports.convert = async (req, res) => {
  const { amount, from, to } = req.body;
  const result = await convert(from, to);

  const userAmount = result.rate * amount;

  res.json({ amount: userAmount });
};
