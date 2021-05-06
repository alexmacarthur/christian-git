#!/usr/bin/env node

const { spawnSync } = require("child_process");
const { getCommandByAlias, colorLog } = require("./helpers");

const completeCommand = process.argv;
const gitCommand = getCommandByAlias(completeCommand[2]);

completeCommand.splice(0, 3, gitCommand);

colorLog(`✝️ Running Christian Git command for \`git ${gitCommand}\`:\n`);

spawnSync("git", completeCommand, { stdio: "inherit" });
