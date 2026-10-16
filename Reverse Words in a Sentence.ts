import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

rl.on("line", (line: string): void => {
  const words: string[] = line.trim().split(/\s+/);
  console.log(words.reverse().join(" "));
  rl.close();
});