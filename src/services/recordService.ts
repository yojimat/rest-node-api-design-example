import { getRecordForWorkout as getRecordForWorkoutDB } from "../database/record.js";

const getRecordForWorkout = (workoutId: string) => {
  try {
    const record = getRecordForWorkoutDB(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};

export { getRecordForWorkout };