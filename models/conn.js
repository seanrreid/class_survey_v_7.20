const host = "drona.db.elephantsql.com",
    database = "dmnyhceu",
    user = "dmnyhceu",
    password = "mwnd-9cn7N6xnkh7SLkNSh5fBU-LCaqF";

const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);

module.exports = db;