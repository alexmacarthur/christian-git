#!/usr/bin/env node

const { spawnSync } = require("child_process");
const { getCommandByAlias, colorLog } = require("./helpers");

let completeCommand = [...process.argv];
const gitCommand = getCommandByAlias(completeCommand[2]);

completeCommand.splice(0, 3, gitCommand);

// If this is an alias for a command w/ flags, ensure it's chunked
// into an array w/ each comma-separated part as its own item.
completeCommand = completeCommand.flatMap((i) => i.split(/[ ]{1,}/));

colorLog(`✝️ Running Christian Git command for \`git ${gitCommand}\`:\n`);

spawnSync("git", completeCommand, { stdio: "inherit" });
