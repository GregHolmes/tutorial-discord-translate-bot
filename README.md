# Build a Translate Bot for Discord

Discord is a VoIP, instant messaging and digitial distribution platform, allowing people an easy way to talk over voice, video and text among their communities. I am, and have been involved, in Discord communities for some time now, for various purposes such as gaming, development, 3d printing. Something that is similar between all of these communities (other than that they're on Discord and have me in them) is that they're multi-lingual. 

As an example, I've been gaming with a community of people on various survival games such as Ark, Atlas, and recently moved to an MMO called New World. This community have people from all over the world, the UK, Sweden, Spain, the US, Mexico are just some. 

English tended to be the primary language in this community, but a large number didn't know enough English to get by, so I decided to build a translate bot to make their lives easier and let them connect with everyone else a little easier.

The `starter-files` branch is the starting branch for the accompanying tutorial at: [Blog post url here](), while the `main` branch is the completed code for the tutorial.

**Table of Contents**

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Creating a Discord Bot Access Token](#creating-a-discord-bot-access-token)
  - [Update Credentials](#update-credentials)
- [Run Discord Bot](#run-discord-bot)
  - [Test Command](#test-command)
  - [Test Reaction](#test-reaction)
- [License](#license)

## Prerequisites

- Node/NPM installed locally.
- A [Discord](https://discord.com/) account.
- An [AWS](https://aws.amazon.com/) account.
- A Discord server for your bot to join (You need to have admin permissions to add the bot)

## Getting Started

### Cloning the Repository

Clone the `starter-files` sample code of this GitHub repository. The file and directory structure is as below:

- `commands`, the directory to store all commands your Discord bot will be listening to,
- `config`, a place to store your configurations for your bot,
- `handlers`, for this tutorial this will only store a `command.js` file, which handles all of your commands,
- `reactions`, the directory to store all reactions your Discord bot will be listening to,
- `services`, for this tutorial this will only store a `flags.js` file, which just contains an array of flags and their relevant data, such as language.

To clone this repository in your terminal run the following command:

```sh
git clone -b starter-files git@github.com:GregHolmes/tutorial-discord-translate-bot.git
```

If you wish to see the complete example, check out the `main` branch.

### Creating a Discord Bot Access Token

Following [Discord's developer documentation](https://discord.com/developers/docs/intro) on instructions to create a Discord Bot and the accompanying Access Token.

### Update Credentials

Copy the `.env.example` file to `.env`, and update it so that the `DISCORD_TOKEN=` has your Discord Bot's Access Token.

## Run Discord Bot

Now run the command below for your bot to start:

```sh
npm run dev
```

### Test Command

In Discord, navigate to your server the bot is assigned to, then run a command `c!example`. You'll see your Discord bot post in the channel the following:

```
I am an example command
```

### Test Reaction

In Discord, navigate to your server the bot is assigned to, then react to one of your messages. You'll see your Discord bot post in the channel the following:

```
<name> reacted with <emoji>
```

## License

This project is subject to the [MIT License][license]

[license]: LICENSE "MIT License"