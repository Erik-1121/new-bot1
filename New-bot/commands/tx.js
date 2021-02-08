module.exports = {
	name: 'tx',
	description: 'txAdmin',
	execute(message, args) {
		message. delete()
		message.channel.send({embed: {
            color: 3447003,
            description: ":rocket: **txAdmin** v3.2.3 bot started!\n:game_die: **Commands:**\n```/addwl: Adds a players to the whitelist\n/help: Prints a list of commands\n/status: Prints the server status\n/txadmin: Prints the current txAdmin version\n...more commands to come soon 😮```",
            
          }
        });
	},
};