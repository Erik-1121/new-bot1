const { MessageMentions } = require("discord.js");

module.exports = {
	
	name: 'addwl',
	description: 'Adds A Player To The Whitelist',
	execute(message, args) {
		message. delete()
		message.channel.send(args + ' Added To The Servers Whitelist');
	},
};