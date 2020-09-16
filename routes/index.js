const express = require("express"),
  router = express.Router(),
  surveyModel = require("../models/surveyModel");

const renderPage = async res => {
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
}

const updateEach = async (items) => {
  console.log("items are ", items);
  for (let key in items) {
      //surveyModel.update(key, items[key]);
      console.log("key and item", key, items[key] )
  }
    surveyModel.update("HTML", 1);

};

/* GET home page. */
router.get("/", async function (req, res, next) {
    renderPage(res);
});

router.post("/", async function (req, res) {
    updateEach(req.body);
    renderPage(res);
});

module.exports = router;
