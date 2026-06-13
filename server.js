const app = require("./app");

(() => {
  try {
    app.listen(4000, () => {
      console.log("Server Run");
    });
  } catch (error) {
    throw error;
  }
})();
