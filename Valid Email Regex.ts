import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (email: string) => {
  email = email.trim();

  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const result: string = emailRegex.test(email) ? "Valid" : "Invalid";

  console.log(result);
  rl.close();
});