const express = require("express"),
  router = express.Router(),
  ClassSurveyModel = require("../models/ClassSurveyModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
    const classInfoData = await ClassSurveyModel.getAllTopicData();

    return res.render("template", {
      locals: {
        title: "Welcome",
        classInfoData: classInfoData,
      },
      partials: {
        partial: "partial-index",
      },
    });
});

router.post("/", async function (req, res) {
    for (let key in req.body) {
        const dbResponse = await ClassSurveyModel.update(key, req.body[key]);
        console.log("database response is:", dbResponse);
    }
    res.status(200).send("OK").end();
});

module.exports = router;
