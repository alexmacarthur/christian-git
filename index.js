#!/usr/bin/env node

const { spawn } = require("child_process");
const { gitCommandByAlias, generateMessage } = require("./helpers");
const completeCommand = process.argv;

//-- Retrieve the correct `git` command by passing the alias that was used.
let gitCommand = gitCommandByAlias(completeCommand[2]);

//-- Insert alias at beginning of command, get rid of first items we don't need.
completeCommand.splice(0, 3, gitCommand);

//-- Create child process to execute git command.
let child = spawn("git", completeCommand);

//-- Output what our command returns.
child.stdout.on("data", (data) => {
  console.log(generateMessage(gitCommand, data));
});

child.stderr.on("data", (data) => {
  console.log(generateMessage(gitCommand, data));
});
