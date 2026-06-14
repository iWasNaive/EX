const rateLimit = require("express-rate-limit")

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 3, 
  message: {
    error: 'تعداد درخواست‌های شما بیش از حد مجاز است د.'
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});