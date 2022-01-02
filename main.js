const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

//Bot instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    //Set a new item in the collection
    //With the key as the command name and the value as the exported module.
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

    const command = client.commands.get(interaction.commandName);

    if(!command) return;

    try{
        await command.execute(interaction);
    } catch (error){
        console.error(error);
        await interaction.reply({content : 'There was an error while executing this commands!', ephemeral: true});
    }
});


//Login (Should be last thing)
client.login(token);