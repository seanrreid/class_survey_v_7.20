const host = "lallah.db.elephantsql.com",
  database = "ttxskhyf",
  user = "ttxskhyf",
  password = "rsKlDc3zxFz1cB-YMTL-HhkLwoRLidPx";

const pgp = require("pg-promise")({
  query: function (event) {
    console.log("QUERY:", event.query);
  },
});

const options = {
  host: host,
  database: database,
  user: user,
  password: password,
};

const db = pgp(options);

module.exports = db;
