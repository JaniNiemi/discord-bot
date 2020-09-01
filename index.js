const { prefix, token } = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const botCommands = require("./botCommands.js").data;

client.once("ready", () => {
	console.log("Ready!");
});

client.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	switch (command) {
		case "kick":
			botCommands.kickUser(message);
			break;

		case "time":
			botCommands.tellTime(message);
			break;

		case "youtube":
			botCommands.youtube(message, args);
			break;

		case "commands":
			botCommands.listCommands(message);
			break;

		default:
			message.channel.send("No command provided or unknown command");
			break;
	}
});

client.login(token);
