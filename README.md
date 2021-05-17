# Christian Git

[![](https://api.codeclimate.com/v1/badges/410bbdeecc970066ba71/maintainability)](https://codeclimate.com/github/alexmacarthur/christian-git/maintainability)

A Christian wrapper for Git to sanctify your version control workflow.

## What is this?

Install this package and you'll have a collection of Christian Git aliases at your fingertips, provided by the `christian-git` command. You can use this package to completely replace your need to call `git` on your machine. If a Christian alias doesn't exist, it'll fall back to use the actual command provided by Git.

For example, `christian-git testimony` calls `git log`.

## Aliases

| Command  | Alias          | Explanation                                                                           |
| -------- | -------------- | ------------------------------------------------------------------------------------- |
| add      | anoint        | Your code's been anointed by God to be saved.                                        |
| blame    | judas          | Truly I tell you, one of you will betray me.                                          |
| branch   | vine           | He is the vine, we are the branches.                                                  |
| checkout | possess      | Resurrect what was once alive.                                                        |
| clone    | bread-and-fish   | Jesus fed the 5000 with five loaves and two fish.                                     |
| commit   | save           | Commit your code to the Lord and it will be saved.                                    |
| diff     | reform         | The repo reformed, always being reformed by the power of the Admin.                   |
| fetch    | fishers-of-men   | Become a fisher of (the code of) men.                                                 |
| init     | create | Before this, there was nothing.                                                                    |
| init     | in-the-beginning | Start us off, God.                                                                    |
| log      | testimony      | Use your code's testimony to share the path the Lord has led you along.               |
| merge    | trinity        | Father, Son, and Holy Spirit. Three in One.                                           |
| pull     | petition       | Petition the Lord through prayer to grant you those remote code changes.              |
| push     | preach         | Proudly declare your Gospel code to those who need it.                                |
| rebase   | disciple       | Regularly examine your code, words and actions and compare them with the Word of God. |
| reflog | resurrect | Resurrect what was once alive. |
| reset    | ark            | God hit reset on the earth.                                                           |
| revert    | repent            | Turn back from your sinful ways.                                                           |
| stash    | sow-and-reap   | Regularly sow your code so that you may reap its blessings later.                     |
| status   | walk           | How's your code's walk with the Lord?                                                 |
| tag      | testament      | God's way of semantic versioning.                                                     |

## Installation

`npm install christian-git -g`

or

`yarn global add christian-git`

## Usage

Whenever you'd normally use `git`, use `christian-git` instead, followed by whatever [alias](#aliases) and additional flats you desire.

### Examples

**Pagan:** `git pull origin/master`

**Righteous:** `christian-git petition origin/master`

---

**Pagan:** `git status`

**Righteous:** `christian-git walk`

---

**Pagan:** `git log --pretty=format:"%h - %an, %ar : %s"`

**Righteous:** `christian-git testimony --pretty=format:"%h - %an, %ar : %s"`

## Contributions

If you have an alias suggestion, or just some ideas to make the project better, fork & PR!

## Feedback

Like this tool? Star it & [tweet me](https://www.twitter.com/amacarthur)!

Hate this tool with a righteous, insatiable passion? Just [tweet me](https://www.twitter.com/amacarthur).
