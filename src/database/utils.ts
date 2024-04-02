import fs from "fs";
import { Workout } from "models/Workout.js";

const saveToDatabase = (DB: Workout) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

export { saveToDatabase };