import fetch from "node-fetch";
import fs from "fs";

const url = 'http://api.airvisual.com/v2/city?city=Boston&state=Massachusetts&country=USA&key=d4c395f8-191d-4c67-a4e0-9a3eb1637dc2';
const path = './data/boston.json';
async function getData() {
  try {
    const res = await fetch(url);
    const json = await res.json();
    fs.writeFileSync(`../lib/data/air.json`, JSON.stringify(json));
    console.log("file written..");
   } catch (err) {
    console.log(err);
   }
  }

  getData();

  export default getData;

  