const { SlashCommandBuilder } = require('@discordjs/builders');
const math = require('mathjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Adds two numbers together!')
        .addNumberOption(option =>
            option.setName('num1')
                .setDescription('Number 1 to add')
                .setRequired(true))
        .addNumberOption(option =>
            option.setName('num2')
                .setDescription('Number 2 to add')
                .setRequired(true)),
    async execute(interaction) { 
        await interaction.reply(math.evaluate(num1 + num2));
    },
};