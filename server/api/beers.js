const router = require("express").Router();
const {
  models: { Beer },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const beers = await Beer.findAll();
    res.json(beers);
  } catch (err) {
    next(err);
  }
});
