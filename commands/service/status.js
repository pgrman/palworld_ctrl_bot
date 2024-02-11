const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");

const description = "Show status PalWorld service";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription(description),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const stdout = execSync('systemctl list-units -q palworld-dedicated.service').toString();
    await interaction.editReply(stdout);
  },
};
