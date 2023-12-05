const landingRouter = require("../routes/landings");
const neasRouter = require("../routes/neas");
const userRouter = require("../routes/users");
const { json } = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
module.exports = function (app) {
  app.use(helmet());
  app.use(compression());
  app.use(json());

  app.use(morgan("dev"));

  app.use("/api/users", userRouter);

  app.use("/api/astronomy/landings", landingRouter);
  app.use("/api/astronomy/neas", neasRouter);

  app.get("/ping", (req, res) => {
    res.send({ success: true });
  });
};
