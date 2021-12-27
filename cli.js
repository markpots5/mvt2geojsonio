#!/usr/bin/env node

const [,, ...args] = process.argv

const { exec } = require('child_process');

exec(`main.bat ${args[0]}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
