const express = require('express')
// require the discord.js module
const { Client, Collection, Intents } = require('discord.js');

// create a new Discord client
const client = new Client({
	allowedMentions: {
        // set repliedUser value to `false` to turn off the mention by default
        repliedUser: false
    },
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
})

const fs = require('fs');
require('dotenv').config();

const exampleReaction = require('./reactions/example-reaction');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');

	app = express();
	app.listen(3001);
});

client.commands = new Collection();

client.categories = fs.readdirSync('./commands/');

['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

// login to Discord with your app's token
client.login(process.env.DISCORD_TOKEN);

client.on('messageCreate', async message => {
	if (message.author.bot) return;
	if (!message.guild) return;

	const prefix = await getPrefix(message);

	if (!message.content.startsWith(prefix)) return;
	if (!message.member) {
		message.member = await message.guild.fetchMember(message);
	}

	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);

	const cmd = args.shift().toLowerCase();

	if (cmd.length === 0) return;

	if (!client.categories.includes(cmd) && !client.commands.has(cmd)) return;

	const categorizedCommand = client.commands.get(cmd + '-' + args[0]);
	const command = client.commands.get(cmd);

	if (categorizedCommand) categorizedCommand.run(client, message, args);
	if (command) command.run(client, message, args);

	if (!message.content.startsWith(prefix) || message.author.bot) return;
});

client.on('messageReactionAdd', async (reaction, user) => {
	// When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}

	if (user.bot) return;

	exampleReaction.handleReaction(reaction, user);
});

function getPrefix(message) {
    return "c!";
}