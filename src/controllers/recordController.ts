import { Request, Response } from "express";
import { getRecordForWorkout as getRecordForWorkoutService } from "../services/recordService.js";

const getRecordForWorkout = (req: Request, res: Response) => {
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
    const allWorkouts = getRecordForWorkoutService(workoutId);
    res.send({ status: "OK", data: allWorkouts });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export { getRecordForWorkout };