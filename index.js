#!/usr/bin/env node

const { spawn } = require('child_process');
const commands = require('./commands');
const outputString = '\nCHRISTIAN ALIAS FOR: git';

//-- Flip object key/value pairs for easier lookup.
let flippedCommands = {};
for(let key in commands){
  flippedCommands[commands[key]] = key;
}

let completeCommand = process.argv;
let alias = completeCommand[2];
let gitCommand = flippedCommands[alias] === undefined ? [alias] : flippedCommands[alias];

//-- Insert alias at beginning of command, get rid of first items we don't need.
completeCommand.splice(0, 3, gitCommand);

//-- Create child process to execute git command.
let child = spawn('git', completeCommand);

//-- Output what our command returns.
child.stdout.on('data', (data) => {
  console.log('\x1b[35m%s\x1b[m', `${outputString} ${gitCommand} \n\n${data}`);
});

child.stderr.on('data', (data) => {
  console.log('\x1b[35m%s\x1b[m', `${outputString} ${gitCommand} \n\n${data}`);
});

