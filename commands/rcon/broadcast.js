const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");
const root_dir = require('app-root-path');
const { rconHost, rconPort, rconPass } = require(root_dir + '/config.json');

const description = "Broadcast message to PalWorld";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("broadcast")
    .setDescription(description)
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("Broadcast message only ASCII and space can't use")
        .setRequired(true)
        .setMaxLength(2000)
    ),
  async execute(interaction) {
    const message = interaction.options.getString("message");
    await interaction.deferReply({ ephemeral: true });
    const stdout = execSync(
      `/usr/games/rcon -a "${rconHost}:${rconPort}" -p ${rconPass} "Broadcast ${message}"`
    ).toString();
    await interaction.editReply(stdout.substring(0, 2000));
  },
};
