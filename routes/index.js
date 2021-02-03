const express = require("express"),
  router = express.Router(),
  ClassSurveyModel = require("../models/ClassSurveyModel");

const renderPage = async (res) => {
  const classInfoData = await ClassSurveyModel.getAllTopicData();
  const statusData = await ClassSurveyModel.getAllStatuses();

  return res.render("template", {
    locals: {
      title: "Welcome",
      classInfoData: classInfoData,
      statusData: statusData,
    },
    partials: {
      partial: "partial-index",
    },
  });
};

/* GET home page. */
router.get("/", async function (req, res, next) {
  renderPage(res);
});

router.post("/", async function (req, res) {
  for (let key in req.body) {
    await ClassSurveyModel.update(key, req.body[key]);
  }
  renderPage(res);
});

module.exports = router;
