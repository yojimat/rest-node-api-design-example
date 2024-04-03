import { Request, Response } from "express";
import {
  getAllWorkouts as getAllWorkoutsService,
  createNewWorkout as createNewWorkoutService,
  getOneWorkout as getOneWorkoutService,
  updateOneWorkout as updateOneWorkoutService,
  deleteOneWorkout as deleteOneWorkoutService
} from "../services/workoutService.js";
import { Workout } from "models/Workout.js";
import { FilterParams } from "models/FilterParams.js";
// When the API is growing, it's better to split the code into different files and folders.
// Moving the controllers folder to v2 and so on, when v2 requires different controller methods.
// This also also relates to the service folder.

const getAllWorkouts = (req: Request, res: Response) => {
  const { mode } = req.query;
  const filterParams: FilterParams = {};
  if (typeof mode === 'string')
    filterParams.mode = mode;
  try {
    const allWorkouts = getAllWorkoutsService(filterParams);
    res.send({ status: "OK", data: allWorkouts });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    const workout = getOneWorkoutService(workoutId);
    res.send({ status: "OK", data: workout });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
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
    return res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
  }
  const newWorkout: Workout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  };
  try {
    const createdWorkout = createNewWorkoutService(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneWorkout = (req: Request, res: Response) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    const updatedWorkout = updateOneWorkoutService(workoutId, body);
    res.send({ status: "OK", data: updatedWorkout });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    deleteOneWorkoutService(workoutId);
    res.status(204).send({ status: "OK" });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout };
