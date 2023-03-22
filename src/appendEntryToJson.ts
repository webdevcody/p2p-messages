import fs from "fs";

export function appendEntryToJson(filePath: string, entry: any) {
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);
  data.push(entry);
  const updatedData = JSON.stringify(data);
  fs.writeFileSync(filePath, updatedData);
}
