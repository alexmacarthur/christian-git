const chalk = require("chalk");
const commands = require("./commands");

/**
 * Flip the keys and values of a given object.
 *
 * @param {object} obj
 * @returns {object}
 */
const flip = function(obj) {
  let flipped = {};

  for (let key in obj) {
    flipped[obj[key]] = key;
  }

  return flipped;
};

/**
 * Append a message to a pre-generated introductory message.
 * @param {string} data
 */
const generateMessage = function(gitCommand, data) {
  let message = chalk.magenta.bold(
    `Running Christian alias for \`git ${gitCommand}\`...`
  );
  return message + `\n\n${chalk.magenta(data)}`;
};

/**
 * Retrieve the appropriate `git` command from the alias that was passed.
 * If it doesn't exist, return the alias itself. Enables backward compatibility.
 * @param {string} alias
 */
const gitCommandByAlias = function(alias) {
  let flippedCommands = flip(commands);
  return flippedCommands[alias] === undefined
    ? [alias]
    : flippedCommands[alias];
};

module.exports = {
  flip,
  gitCommandByAlias,
  generateMessage
};
