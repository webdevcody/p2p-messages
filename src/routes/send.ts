import type { Request, Response } from "express";
import { lookupUser } from "../lookupUser";
import { v4 as uuidv4 } from "uuid";
import { sendMessage } from "../sendMessage";
import { getRandomSeedServer } from "../getRandomSeedServer";
import { getCurrentUri } from "../getCurrentUri";

export async function send(req: Request, res: Response) {
  const { to, message } = req.body;
  try {
    const foundUser = await lookupUser(to, getCurrentUri(), uuidv4());
    await sendMessage(process.env.USER_NAME!, message, foundUser.uri);
    return res.json({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(404).send("user not found");
  }
}
