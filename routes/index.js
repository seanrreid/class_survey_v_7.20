const express = require("express"),
  router = express.Router(),
  ClassSurveyModel = require("../models/ClassSurveyModel");

const renderPage = async res => {
    const classInfoData = await ClassSurveyModel.getAllTopicData();
    const topicStatusData = await ClassSurveyModel.getAllStatuses();

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
}

const updateEach = async (items) => {
  console.log("items are ", items);
  for (let key in items) {
      await ClassSurveyModel.update(key, items[key]);
  }
};

/* GET home page. */
router.get("/", async function (req, res, next) {
    renderPage(res);
});

router.post("/", async function (req, res) {
    await updateEach(req.body);
    renderPage(res);
});

module.exports = router;
