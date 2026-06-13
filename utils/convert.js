
module.exports = async () => {
  // const result = await axios.get(`https://api.frankfurter.app/latest?from=USD&to=EUR`)
  // console.log(result);

  axios
    .get("https://google.com")
    .then((res) => console.log("OK"))
    .catch((err) => console.log("FAILED", err.message));
};
