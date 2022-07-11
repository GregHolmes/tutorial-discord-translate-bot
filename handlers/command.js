const fs = require('fs')
const ascii = require('ascii-table')
const table = new ascii('Commands')

table.setHeading('Command', 'Load status')

module.exports = client => {
	fs.readdirSync('./commands/').forEach(dir => {
		if (fs.lstatSync(`./commands/${dir}`).isDirectory()) {
			const commands = fs.readdirSync(`./commands/${dir}/`).filter(file =>
				file.endsWith('.js')
			);

			for (const file of commands) {
				const pull = require(`../commands/${dir}/${file}`)

				if (pull.name) {
					client.commands.set(pull.category + '-' + pull.name, pull);
					table.addRow(file, '✅')
				}
				else {
					table.addRow(
					file,
					'❌  -> missing a help.name, or help.name is not a string.'
					);

					continue
				}
			}
		} else {
			const pull = require(`../commands/${dir}`);
			client.commands.set(pull.name, pull);
			table.addRow(dir, '✅');
		}
	});

	console.log(table.toString());
};