const db = require("./conn");

class ClassSurveyModel {
  constructor(id, name, rank) {
    this.id = id;
    this.name = name;
    this.rank = rank;
  }

  static async getAllTopicData() {
    try {
      const response = await db.any(
        `SELECT * FROM topics
        INNER JOIN class_status
        ON topics.status_id = class_status.id
        ORDER BY topics.id;`
      );
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }

  static async update(topic, rank_id) {
    try {
      const response = await db.result(`UPDATE topics SET status_id = $1 WHERE topic_name = $2;`, [rank_id, topic]);
      return response;
    } catch (err) {
      console.log("ERROR", err.message);
      return err;
    }
  }
}

module.exports = ClassSurveyModel;
