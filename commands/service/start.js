const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");

const message = "Start PalWorld serivce";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("start")
    .setDescription(message),
  async execute(interaction) {
    await interaction.deferReply();
    const stdout = execSync('sudo systemctl start palworld-dedicated.service');
    await interaction.editReply(message);
  },
};
