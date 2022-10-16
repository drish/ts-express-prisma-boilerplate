import { NextFunction, Request, Response } from "express";
import { getUser } from "../services/user.service";

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await getUser());
  } catch (e) {
    console.log(e);
    next(e);
  }
}