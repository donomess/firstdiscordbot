const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

//Bot instance
const Client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () => {
    console.log('Bot Ready.');
});


//Login (Should be last thing)
client.login(token);