import { Request, Response } from "express";
// When the API is growing, it's better to split the code into different files and folders.
// Moving the controllers folder to v2 and so on, when v2 requires different controller methods.
// This also also relates to the service folder.

const getAllWorkouts = (req: Request, res: Response) => res.send("Get all workouts");
const getOneWorkout = (req: Request, res: Response) => res.send("Get and existing workout");
const createNewWorkout = (req: Request, res: Response) => res.send("Create a new workout");
const updateOneWorkout = (req: Request, res: Response) => res.send("Update an existing workout");
const deleteOneWorkout = (req: Request, res: Response) => res.send("Delete an existing workout");

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
