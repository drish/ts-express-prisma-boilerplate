
import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send("Express + TypScript");
});

app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${3000}`);
});
