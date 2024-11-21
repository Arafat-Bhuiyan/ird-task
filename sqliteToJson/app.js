const sqlite3 = require("sqlite3");
const fs = require("fs");

const dbPath = "./dua_main.sqlite"; // Path to your SQLite database file
const db = new sqlite3.Database(dbPath);

const data = [];

db.each(
  "SELECT * FROM dua",
  (err, row) => {
    if (err) {
      console.error(err);
    } else {
      data.push(row); // Push the row data into the array
    }
  },
  (err, numRows) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${numRows} rows fetched`);
      fs.writeFileSync("output.json", JSON.stringify(data, null, 2)); // Save the data in JSON format
      console.log("Data saved to output.json");
    }
  }
);
