const { Landings } = require("../models/landing");
const asyncRoutes = require("../middlewares/async");

const express = require("express");

const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

const landingController = require("../controllers/landings");

const router = express.Router();

router.get("/", landingController.getAll);

router.get("/mass/minimo/:mass", landingController.getByNameandMass);

router.get("/mass/:mass", landingController.getByMass);

router.get("/:landingId", landingController.getById);

router.get("/class/:class", landingController.getByClass);

router.post("/", landingController.create);

router.put("/:landingId", landingController.update);

router.delete("/:landingId", landingController.remove);

module.exports = router;
