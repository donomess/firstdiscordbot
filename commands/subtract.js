const { SlashCommandBuilder } = require('@discordjs/builders');
const math = require('mathjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sub')
        .setDescription('Subtracts two numbers!')
        .addNumberOption(option =>
            option.setName('num1')
                .setDescription('Number 1 to subtract')
                .setRequired(true))
        .addNumberOption(option =>
            option.setName('num2')
                .setDescription('Number 2 to subtract')
                .setRequired(true)),
    async execute(interaction) { 
        const num1 = interaction.options.getNumber('num1');
        const num2 = interaction.options.getNumber('num2');
        await interaction.reply(String(math.evaluate(num1 - num2)));

        console.log([num1, num2]);
    },
};