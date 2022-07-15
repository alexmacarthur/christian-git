import chalk, { Chalk } from "chalk";
import commands from "./commands.js";

const chalkCTX = new Chalk({ level: 3 });

/**
 * Output a message of particular color.
 *
 * @param {string} message
 * @param {array} color
 */
export const colorLog = function (message, color = [120, 81, 169]) {
  console.log(chalkCTX.rgb(...color)(chalk.bold(message)));
};

/**
 * Retrieve the appropriate `git` command from the alias that was passed.
 * If it doesn't exist, return the alias itself. Enables backward compatibility.
 *
 * @param {string} alias
 */
export const getCommandByAlias = function (alias) {
  for (let command in commands) {
    let commandHasAlias = commands[command].find((a) => alias === a);

    if (commandHasAlias) {
      return command;
    }
  }

  return alias;
};
