import { Record } from 'models/Record.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const DB = require("./db.json");

const getRecordForWorkout = (workoutId: string) => {
  try {
    const record = DB.records.filter((record: Record) => record.workout === workoutId);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return record;
  } catch (error: any) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

export { getRecordForWorkout };