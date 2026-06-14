const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 10 * 1000,
  max: 20,
  message: {
    error: "تعداد درخواست ها بیش از حد بود ۱۰ ثانیه صبر کنید",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
