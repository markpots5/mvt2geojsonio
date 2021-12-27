#!/usr/bin/env node

const [,, ...args] = process.argv

const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c', 'main.bat']);

