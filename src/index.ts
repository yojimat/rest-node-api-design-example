import express from "express";
import bodyParser from 'body-parser';
import v1WourkoutRouter from "./v1/routes/workoutRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WourkoutRouter);

app.get("/", (_, res) => res.redirect(`/api/v1/workouts`));
app.get("/api/v1", (_, res) => res.redirect(`/api/v1/workouts`));

app.listen(PORT, () => console.log(`API is listening on port http://localhost:${PORT}`));
