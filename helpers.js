const chalk = require("chalk");
const chalkCTX = new chalk.Instance({ level: 3 });
const commands = require("./commands");

/**
 * Output a message of particular color.
 *
 * @param {string} message
 * @param {array} color
 */
const colorLog = function (message, color = [120, 81, 169]) {
  console.log(chalkCTX.rgb(...color)(chalk.bold(message)));
};

/**
 * Retrieve the appropriate `git` command from the alias that was passed.
 * If it doesn't exist, return the alias itself. Enables backward compatibility.
 *
 * @param {string} alias
 */
const getCommandByAlias = function (alias) {
  for (let command in commands) {
    let commandHasAlias = commands[command].find((a) => alias === a);

    if (commandHasAlias) {
      return command;
    }
  }

  return alias;
};

module.exports = {
  colorLog,
  getCommandByAlias,
};
