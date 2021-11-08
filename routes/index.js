const express = require("express");
const { Router } = express;
const router = new Router();

router.get("/", (req, res) => {
  //{ root: "." } salio a la raiz de todo el proyecto y busco la ruta: "public/index.html"
  res.sendFile("public/index.html", { root: "." });
});

module.exports = router;
