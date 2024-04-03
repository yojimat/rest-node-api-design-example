import { FilterParams } from 'models/FilterParams.js';
import {
  getAllWorkouts as getAllWorkoutsDB,
  createNewWorkout as createNewWorkoutDB,
  getOneWorkout as getOneWorkoutDB,
  updateOneWorkout as updateOneWorkoutDB,
  deleteOneWorkout as deleteOneWorkoutDB
} from '../database/workout.js';
import { Workout } from 'models/Workout.js';
import { v4 as uuid } from 'uuid';

const getAllWorkouts = (filterParams: FilterParams) => {
  try {
    return getAllWorkoutsDB(filterParams)
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = (id: string) => {
  try {
    return getOneWorkoutDB(id);
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = (newWorkout: Workout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    return createNewWorkoutDB(workoutToInsert);
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = (id: string, changes: Workout) => {
  try {
    return updateOneWorkoutDB(id, changes);
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = (id: string) => {
  try {
    deleteOneWorkoutDB(id);
  } catch (error) {
    throw error;
  }
};

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
