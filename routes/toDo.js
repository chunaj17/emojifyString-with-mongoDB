const express = require("express");
const charactersParam = require("../controllers/charReqParam");
const dummyText = require("../controllers/dummyText");
const filterReq = require("../controllers/filterReq");
const filterReqForDummyText = require("../controllers/filterReqForDummyText");
const writeDummy = require("../controllers/writeDummy");
const { addData } = require("../controllers/jsonController")
const router = express.Router();
router.route("/write").post(filterReq, addData);
router.route("/writeDummy").post(filterReqForDummyText, dummyText, writeDummy);
router.route("/:id/:value").get(charactersParam);
module.exports = router;
