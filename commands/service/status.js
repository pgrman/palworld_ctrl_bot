const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");

const message = "Show status PalWorld serivce";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription(message),
  async execute(interaction) {
    await interaction.deferReply();
    const stdout = execSync('systemctl list-units -q palworld-dedicated.service').toString();
    await interaction.editReply(stdout);
  },
};
