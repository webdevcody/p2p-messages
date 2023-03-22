import fetch from "cross-fetch";
import { appendEntryToJson } from "./appendEntryToJson";
import { Node } from "./servers";

export function lookupUser(user: string, uri: string, requestId: string) {
  return fetch(`${uri}/lookup?user=${user}`, {
    headers: {
      "x-request-id": requestId,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json() as Promise<Node>;
    }
    throw new Error("user not found");
  });
}
