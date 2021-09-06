const router = require("express").Router();
const {
  models: { Wine },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const wines = await Wine.findAll();
    res.json(wines);
  } catch (err) {
    next(err);
  }
});
