import getData from "../data/fetch.js";
import cleanAir from "../models/cleanAir.js";
import data from "../data/air.json" assert { type: "json" };

await getData();

async function seed() {
    await cleanAir.deleteMany({});
  
    await cleanAir.create(data);
  
    console.log("<------------------------->");
    console.log("seeding complete");
    console.log("<------------------------->");
  
    process.exit();
  }
  
  seed();