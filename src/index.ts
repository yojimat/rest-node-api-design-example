import express from "express";
import bodyParser from 'body-parser';
import v1WourkoutRouter from "./v1/routes/workoutRoutes.js";
import apicache from 'apicache';
import { swaggerDocs as V1SwaggerDocs } from "./v1/swagger.js";

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WourkoutRouter);

app.get("/", (_, res) => res.redirect(`/api/v1/workouts`));
app.get("/api/v1", (_, res) => res.redirect(`/api/v1/workouts`));

app.listen(PORT, () => {
  console.log(`API is listening on port http://localhost:${PORT}`);
  V1SwaggerDocs(app, PORT);
});
