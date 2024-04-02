import { Workout } from 'models/Workout.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const DB = require("./db.json");
import { saveToDatabase } from './utils.js';

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId: string) => {
  const workout = DB.workouts.find((workout: Workout) => workout.id === workoutId);
  if (!workout) {
    return;
  }
  return workout;
};

const createNewWorkout = (newWorkout: Workout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout: Workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const updateOneWorkout = (workoutId: string, changes: Workout) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout: Workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId: string) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout: Workout) => workout.id === workoutId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};

