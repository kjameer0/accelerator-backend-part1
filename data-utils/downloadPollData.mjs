import { writeFile } from "node:fs/promises";
import path from "node:path";
// const DIRECTORY = path.dirname();
async function fetchPollData() {
  const res = await fetch(
    "https://data.cityofnewyork.us/api/views/utqd-4534/rows.json?accessType=DOWNLOAD"
  );
  const data = await res.json();
  return data;
}

async function main() {
  const pollData = await fetchPollData();
  const dataFilePath = path.join(process.cwd(), "data", "pollData.json");
  await writeFile(dataFilePath, JSON.stringify(pollData), (error) => {
    if (error) {
      console.error(error);
    }
  });
}

main();
