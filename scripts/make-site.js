import fs from "fs-extra";

const db = {};

// get list of files from jobs directory
const files = fs.readdirSync("./jobs");

// sort files by name (descending)
files.sort((a, b) => {
  return a < b ? (a > b ? 0 : 1) : -1;
});

// populate the jobs array
db.jobs = files.map((file) => {
  const job = JSON.parse(fs.readFileSync(`./jobs/${file}`));
  return job;
});

// write the database to disk
fs.outputFileSync("./build/db.json", JSON.stringify(db, null, 2));

// copy the src directory to the build directory
fs.copySync("./src", "./build");
