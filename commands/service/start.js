const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");

const description = "Start PalWorld service";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("start")
    .setDescription(description),
  async execute(interaction) {
    await interaction.deferReply();
    const stdout = execSync('sudo systemctl start palworld-dedicated.service');
    await interaction.editReply(description);
  },
};
