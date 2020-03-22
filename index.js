#!/usr/bin/env node

const { spawnSync } = require("child_process");
const { getCommandByAlias, colorLog } = require("./helpers");

let completeCommand = process.argv;
let gitCommand = getCommandByAlias(completeCommand[2]);

completeCommand.splice(0, 3, gitCommand);

colorLog(`Running Christian Git command for \`git ${gitCommand}\`:\n`);

spawnSync("git", completeCommand, { stdio: "inherit" });
