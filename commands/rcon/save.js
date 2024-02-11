const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");
const root_dir = require('app-root-path');
const { rconHost, rconPort, rconPass } = require(root_dir + '/config.json');

const description = "PalWorld force save";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("save")
    .setDescription(description),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const stdout = execSync(`/usr/games/rcon -a "${rconHost}:${rconPort}" -p ${rconPass} "Save"`).toString();
    await interaction.editReply(stdout.substring(0, 2000));
  },
};
