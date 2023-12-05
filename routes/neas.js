const { Router } = require("express");

const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

const neasController = require("../controllers/neas");

const router = Router();

router.get("/", neasController.getAll);

router.get("/:neasId", neasController.getById);

router.post("/", neasController.create);

router.put("/:neasId", neasController.update);

router.delete("/:neasId", neasController.remove);

module.exports = router;
