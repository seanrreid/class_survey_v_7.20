const express = require("express"),
  router = express.Router(),
  surveyModel = require("../models/surveyModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
    const classInfoData = await surveyModel.getAllTopicData();
    const topicStatusData = await surveyModel.getAllStatuses();

    return res.render("template", {
      locals: {
        title: "Welcome",
        classInfoData: classInfoData,
        topicStatusData: topicStatusData,
      },
      partials: {
        partial: "partial-index",
      },
    });
});

router.post("/", async function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;
