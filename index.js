#!/usr/bin/env node

const { spawn } = require("child_process");
const { getCommandByAlias, generateMessage } = require("./helpers");
const completeCommand = process.argv;

let gitCommand = getCommandByAlias(completeCommand[2]);

completeCommand.splice(0, 3, gitCommand);

let child = spawn("git", completeCommand);

child.stdout.on("data", (data) => {
  console.log(generateMessage(gitCommand, data));
});

child.stderr.on("data", (data) => {
  console.log(generateMessage(gitCommand, data));
});
