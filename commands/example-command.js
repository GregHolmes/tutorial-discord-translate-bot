module.exports = {
	name: 'example',
	description: 'This is an example command',
	usage: 'c!example',
	run: async (client, message, args) => {
    message.reply('> I am an example command')
	},
}