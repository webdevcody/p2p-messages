import type { Request, Response } from "express";
import { addNode } from "../servers";

export function register(req: Request, res: Response) {
  const { user, uri } = req.body;
  addNode({
    user,
    uri,
  });
  res.json({ message: "success" });
}
