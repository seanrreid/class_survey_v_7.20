const db = require("./conn");

class ClassInfo {
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

  static async getAllStatuses() {
    try {
      const response = await db.any(`SELECT * FROM class_status;`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }
  static async update(topic, rank) {
    const query = `UPDATE topics SET status_id=${rank} WHERE topic_name = '${topic}'`;
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      console.log("ERROR", err.message);
      return err;
    }
  }
}

module.exports = ClassInfo;
