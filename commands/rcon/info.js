const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");
const root_dir = require('app-root-path');
const { rconHost, rconPort, rconPass } = require(root_dir + '/config.json');

const description = "Show PalWorld dedicated server infomation";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription(description),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const stdout = execSync(`/usr/games/rcon -a "${rconHost}:${rconPort}" -p ${rconPass} "Info"`).toString();
    await interaction.editReply(stdout.substring(0, 2000));
  },
};
