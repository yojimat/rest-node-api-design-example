import {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
} from "../../controllers/workoutController.js";
import { getRecordForWorkout } from "../../controllers/recordController.js";
import express from "express";

const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:workoutId", getOneWorkout);

router.get("/:workoutId/records", getRecordForWorkout);

router.post("/", createNewWorkout);

router.patch("/:workoutId", updateOneWorkout);

router.delete("/:workoutId", deleteOneWorkout);

export default router;
