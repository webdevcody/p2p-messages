import type { Request, Response } from "express";

export async function message(req: Request, res: Response) {
  console.log(`${req.body.from}: ${req.body.message}`);
  res.json({ message: "success" });
}
