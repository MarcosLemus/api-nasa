const { Router } = require("express");

const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

const userController = require("../controllers/users");

const router = Router();

router.get("/", userController.getAll);

router.get("/:userId", userController.getById);

router.post("/", userController.create);

router.put("/:userId", userController.update);

router.delete("/:userId", userController.remove);

module.exports = router;
