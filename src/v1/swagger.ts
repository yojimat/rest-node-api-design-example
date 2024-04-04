import { Request, Response } from "express";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import type { Express } from 'express';

// Basic Meta information about our API
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Workout API',
      version: '1.0.0',
      description: 'A simple API to manage workouts and records',
    },
  },
  apis: ['./src/v1/routes/*.ts', "./src/database/workout.ts"],
}

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
export const swaggerDocs = (app: Express, port: string | 3000) => {
  // Route-Handler to visit our docs
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs available as JSON
  app.get('/api/v1/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`Version 1 Docs are available on http://localhost:${port}/api/v1/docs`)
}
