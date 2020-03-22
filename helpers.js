const chalk = require("chalk");
const commands = require("./commands");

/**
 * Append a message to a pre-generated introductory message.
 * 
 * @param {string} data
 */
const generateMessage = function (gitCommand, data) {
  let message = chalk.magenta.bold(
    `Running Christian Git command for \`git ${gitCommand}\`...`
  );
  return `${message}\n\n${chalk.magenta(data)}`;
};

/**
 * Retrieve the appropriate `git` command from the alias that was passed.
 * If it doesn't exist, return the alias itself. Enables backward compatibility.
 * 
 * @param {string} alias
 */
const getCommandByAlias = function (alias) {
  for (let command in commands) {
    let commandHasAlias = commands[command].find(a => alias === a);

    if (commandHasAlias) {
      return command;
    }
  }

  return alias;
};

module.exports = {
  getCommandByAlias,
  generateMessage,
};
