import { Request, Response } from "express";
import {
  getAllWorkouts as getAllWorkoutsService,
  createNewWorkout as createNewWorkoutService,
  getOneWorkout as getOneWorkoutService,
  updateOneWorkout as updateOneWorkoutService,
  deleteOneWorkout as deleteOneWorkoutService
} from "../services/workoutService.js";
import { Workout } from "models/Workout.js";
// When the API is growing, it's better to split the code into different files and folders.
// Moving the controllers folder to v2 and so on, when v2 requires different controller methods.
// This also also relates to the service folder.

const getAllWorkouts = (req: Request, res: Response) => {
  const allWorkouts = getAllWorkoutsService();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return res.status(400);
  }
  const workout = getOneWorkoutService(workoutId);
  res.send({ status: "OK", data: workout });
};

const createNewWorkout = (req: Request, res: Response) => {
  const { body } = req;
  // I could use a library like express-validator to validate the body
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return res.status(400);
  }
  const newWorkout: Workout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  };
  const createdWorkout = createNewWorkoutService(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateOneWorkout = (req: Request, res: Response) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const updatedWorkout = updateOneWorkoutService(workoutId, body);
  res.send({ status: "OK", data: updatedWorkout });
};

const deleteOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  deleteOneWorkoutService(workoutId);
  res.status(204).send({ status: "OK" });
};

export { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout };
