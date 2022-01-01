const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

//Bot instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commmands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require('./commands/${file}');
    //Set a new item in the collection
    //With the key as the command name and the value as the exported module.
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Bot Ready.');
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const {commandName} = interaction; 


})


//Login (Should be last thing)
client.login(token);