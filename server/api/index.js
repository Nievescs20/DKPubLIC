const router = require("express").Router();
module.exports = router;

router.use("/foods", require("./foods"));
router.use("/beers", require("./beers"));
router.use("/wines", require("./wines"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
