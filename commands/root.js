const { SlashCommandBuilder } = require('@discordjs/builders');
const math = require('mathjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('root')
        .setDescription('Finds the square root of a number!')
        .addNumberOption(option =>
            option.setName('num')
                .setDescription('Number to find the root of.')
                .setRequired(true)),
    async execute(interaction) { 
        const num = interaction.options.getNumber('num');
        await interaction.reply(math.sqrt(num));

        console.log([num]);
    },
};