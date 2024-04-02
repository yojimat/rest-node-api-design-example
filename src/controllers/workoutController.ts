import { Request, Response } from "express";
// import workoutService from "../services/workoutService.js";
// When the API is growing, it's better to split the code into different files and folders.
// Moving the controllers folder to v2 and so on, when v2 requires different controller methods.
// This also also relates to the service folder.

const getAllWorkouts = (req: Request, res: Response) => {
  // const allWorkouts = workoutService.getAllWorkouts();
  res.send("Get all workouts");
};

const getOneWorkout = (req: Request, res: Response) => {
  // const workout = workoutService.getOneWorkout();
  res.send("Get an existing workout");
};

const createNewWorkout = (req: Request, res: Response) => {
  // const createdWorkout = workoutService.createNewWorkout();
  res.send("Create a new workout");
};

const updateOneWorkout = (req: Request, res: Response) => {
  //const updatedWorkout = workoutService.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req: Request, res: Response) => {
  // const deletedWorkout = workoutService.deleteOneWorkout();
  res.send("Delete an existing workout");
};

export { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout };
