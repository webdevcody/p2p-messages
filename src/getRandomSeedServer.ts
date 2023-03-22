import { seeds } from "../seed";

export function getRandomSeedServer() {
  return seeds[Math.floor(Math.random() * seeds.length)];
}
