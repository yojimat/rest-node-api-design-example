import {
  getAllWorkouts as getAllWorkoutsDB,
  createNewWorkout as createNewWorkoutDB,
  getOneWorkout as getOneWorkoutDB,
  updateOneWorkout as updateOneWorkoutDB,
  deleteOneWorkout as deleteOneWorkoutDB
} from '../database/workout.js';
import { Workout } from 'models/Workout.js';
import { v4 as uuid } from 'uuid';

const getAllWorkouts = () => {
  return getAllWorkoutsDB()
};

const getOneWorkout = (id: string) => {
  return getOneWorkoutDB(id);
};

const createNewWorkout = (newWorkout: Workout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = createNewWorkoutDB(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (id: string, changes: Workout) => {
  return updateOneWorkoutDB(id, changes);
};

const deleteOneWorkout = (id: string) => {
  deleteOneWorkoutDB(id);
};

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
