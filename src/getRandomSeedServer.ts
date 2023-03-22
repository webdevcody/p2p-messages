import { seeds } from "../seed";

export function getRandomSeedServer() {
  const seedsOmittingCurrentNode = seeds.filter(
    (seed) => seed.user !== process.env.USER_NAME
  );
  return seedsOmittingCurrentNode[
    Math.floor(Math.random() * seedsOmittingCurrentNode.length)
  ];
}
