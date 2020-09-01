const prefix = require("./config.json").prefix;
const methods = {
	kickUser: (message) => {
		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick ${taggedUser}
        No *actual* kick feature implemented yet...`);
	},

	tellTime: (message) => {
		const date = new Date();
		const hour = date.getHours();
		const minute = date.getMinutes();
		const second = date.getSeconds();

		message.channel.send(`Time is: ${hour}:${minute}:${second}`);
	},

	youtube: (message, args) => {
		let argumentsString = "";
		args.forEach((arg) => {
			argumentsString += arg + "";
		});

		message.channel.send(`https://youtube.com/${argumentsString}`);
	},

	listCommands: (message) => {
		message.channel.send(`Available bot commands:
        > Kick user: 
            ${prefix}kick @<username>
        > Tell current time: 
            ${prefix}time
        > Link youtube channel: 
            ${prefix}youtube <channel name>
    
        More to come :slight_smile:`);
	},
};

exports.data = methods;
