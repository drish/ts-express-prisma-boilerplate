
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import * as routes from "./routes"

import express, { Express, NextFunction, Request, Response } from 'express';

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', routes.default);

// TODO: err handler

app.listen(3001, "0.0.0.0", () => {
  console.log(`⚡️[server]: Server is running at https://0.0.0.0:${3000}`);
});
