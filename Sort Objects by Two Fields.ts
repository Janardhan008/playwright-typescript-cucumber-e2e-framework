import * as fs from "fs";

interface Employee {
  name: string;
  salary: number;
}

const tokens: string[] = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const employees: Employee[] = [];
for (let i = 0; i < tokens.length; i += 2) {
  employees.push({ name: tokens[i], salary: Number(tokens[i + 1]) });
}

employees.sort((a, b) => {
  if (b.salary !== a.salary) {
    return b.salary - a.salary;   // higher salary first
  }
  return a.name.localeCompare(b.name);   // tie -> alphabetical order
});

const output: string = employees.map(e => `${e.name} ${e.salary}`).join("\n");
console.log(output);