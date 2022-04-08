# Christian Git

A Christian wrapper for Git to sanctify your version control.

## What is this?

Install this package and you'll have a collection of Christian Git commands and aliases at your fingertips (which were miraculously knitted together in your mother's womb). Using the `christian-git` command, you can completely eliminate the need to call `git` on your machine. If a Christian version of a command doesn't exist, it'll fall back to use the actual command provided by Git.

For example, running `christian-git testimony` calls `git log`, and `christian-git crucify some-branch` calls `git branch -D some-branch`.

Each of these commands will respect any flags you include, passing them through to the underlying Git command.

## Commands

Commands that override core Git commands.

| Heathen Command | Redeemed Command | Explanation                                                                           |
| --------------- | ---------------- |---------------------------------------------------------------------------------------|
| add             | anoint           | Your code's been anointed by God to be saved.                                         |
| blame           | judas            | Truly I tell you, one of you will betray me.                                          |
| branch          | vine             | He is the vine, we are the branches.                                                  |
| checkout        | possess          | Resurrect what was once alive.                                                        |
| clone           | bread-and-fish   | Jesus fed the 5000 with five loaves and two fish.                                     |
| commit          | save             | Commit your code to the Lord and it will be saved.                                    |
| diff            | reform           | The repo reformed, always being reformed by the power of the Admin.                   |
| fetch           | fishers-of-men   | Become a fisher of (the code of) men.                                                 |
| init            | create           | Before this, there was nothing.                                                       |
| init            | in-the-beginning | Start us off, God.                                                                    |
| log             | testimony        | Use your code's testimony to share the path the Lord has led you along.               |
| merge           | trinity          | Father, Son, and Holy Spirit. Three in One.                                           |
| pull            | petition         | Petition the Lord through prayer to grant you those remote code changes.              |
| push            | preach           | Proudly declare your Gospel code to those who need it.                                |
| rebase          | disciple         | Regularly examine your code, words and actions and compare them with the Word of God. |
| reflog          | resurrect        | Resurrect what was once alive.                                                        |
| reset           | ark              | God hit reset on the earth.                                                           |
| revert          | repent           | Turn back from your sinful ways.                                                      |
| stash           | sow-and-reap     | Regularly sow your code so that you may reap its blessings later.                     |
| status          | walk             | How's your code's walk with the Lord?                                                 |
| tag             | testament        | God's way of semantic versioning.                                                     |
| bisect          | lost-sheep       | Become the good shepherd and find those led astray.                                   |

## Alias

Aliases that provide shorthand means of running more complex commands (basically anything that require extra flags).

## Aliases

| Heathen Command | Redeemed Alias | Explanation                                    |
| --------------- | -------------- | ---------------------------------------------- |
| branch -D       | crucify        | Delete the branch that no longer bears fruit. |
| push --force    | indoctrinate   | Force the theology of your code onto the vulnerable and gullable. |

## Installation

`npm install christian-git -g`

or

`yarn global add christian-git`

## Usage

Whenever you'd normally use `git`, use `christian-git` instead, followed by whatever [command](#commands) or [alias](#aliases) and any flags you'd like to pass.

### Some More Examples

**Pagan:** `git pull origin/master`

**Righteous:** `christian-git petition origin/master`

---

**Pagan:** `git status`

**Righteous:** `christian-git walk`

---

**Pagan:** `git log --pretty=format:"%h - %an, %ar : %s"`

**Righteous:** `christian-git testimony --pretty=format:"%h - %an, %ar : %s"`

## Contributions

If you have a command or alias suggestion, or just some ideas to make the project better, fork & PR!

## Feedback

Like this tool? Star it & [tweet me](https://www.twitter.com/amacarthur)!

Hate this tool with a righteous, insatiable passion? Just [tweet me](https://www.twitter.com/amacarthur).
