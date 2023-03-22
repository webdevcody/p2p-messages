import type { Request, Response } from "express";
import { lookupUser } from "../lookupUser";
import { addNode, getNodeByUser, getNodes } from "../servers";
import { v4 as uuidv4 } from "uuid";

const seedIds = new Set();

export async function lookup(req: Request, res: Response) {
  const { user } = req.query as { user: string };
  const requestId = req.get("x-request-id") || uuidv4();

  if (seedIds.has(requestId)) {
    return res.status(404).send("user not found");
  }

  seedIds.add(requestId);
  const serverByUser = getNodeByUser(user);
  console.log(`a request for user ${user} was made`, serverByUser);

  if (!serverByUser) {
    let foundUser;

    for (let server of getNodes()) {
      console.log("user not found on this node, checking ", server.user);
      try {
        foundUser = await lookupUser(user, server.uri, requestId);
        console.log("foundUser", foundUser);
      } catch (err) {}
    }

    if (foundUser) {
      addNode(foundUser);
      return res.json(foundUser);
    } else {
      return res.status(404).send("user not found");
    }
  }

  console.log("returning serverByUser", user);
  res.json(serverByUser);
}
