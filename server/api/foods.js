const router = require("express").Router();
const {
  models: { Food },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const foods = await Food.findAll();
    res.json(foods);
  } catch (err) {
    next(err);
  }
});
