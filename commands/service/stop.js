const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");

const description = "Stop PalWorld service";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stop")
    .setDescription(description),
  async execute(interaction) {
    await interaction.deferReply();
    const stdout = execSync('sudo systemctl stop palworld-dedicated.service');
    await interaction.editReply(description);
  },
};
