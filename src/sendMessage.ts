import fetch from "cross-fetch";

export function sendMessage(from: string, message: string, uri: string) {
  return fetch(`${uri}/message`, {
    method: "POST",
    body: JSON.stringify({
      from,
      message,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
}
