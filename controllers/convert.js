const convert = require("./../utils/convert");

exports.convert = async (req, res) => {
  const { amount, from, to } = req.body;

  const result = await convert(amount, from, to);


  res.json({ amount: result });
};
