import fetch from "cross-fetch";
import { getCurrentUri } from "./getCurrentUri";

export function registerWithSeedServer(uri: string) {
  return fetch(`${uri}/register`, {
    method: "POST",
    body: JSON.stringify({
      uri: getCurrentUri(),
      user: process.env.USER_NAME,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
