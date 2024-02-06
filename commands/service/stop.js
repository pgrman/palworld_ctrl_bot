const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");

const message = "Stop PalWorld serivce";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stop")
    .setDescription(message),
  async execute(interaction) {
    await interaction.deferReply();
    const stdout = execSync('sudo systemctl stop palworld-dedicated.service');
    await interaction.editReply(message);
  },
};
