const express = require("express");
const router = express.Router();

const { addDoubt, getMyDoubts, getAllDoubts } = require("../controllers/doubt.controller");
const auth = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/role.middleware");

router.post("/", auth, addDoubt);
router.get("/my", auth, getMyDoubts);
router.get("/all", auth, isAdmin("admin"), getAllDoubts);

module.exports = router;
