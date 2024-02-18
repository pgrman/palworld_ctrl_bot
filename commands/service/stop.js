const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("child_process");
const root_dir = require('app-root-path');
const save = require("../rcon/save");
const { rconHost, rconPort, rconPass } = require(root_dir + '/config.json');

const description = "Stop PalWorld service";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stop")
    .setDescription(description),
  async execute(interaction) {
    await interaction.deferReply();
    const saveout = execSync(`/usr/games/rcon -a "${rconHost}:${rconPort}" -p ${rconPass} "Save"`).toString();
    if (/Complete Save/.test(saveout)) {
      await interaction.editReply(saveout);
      const stopout = execSync('sudo systemctl stop palworld-dedicated.service');
      await interaction.followUp(description);
    }
    else {
      await interaction.editReply(saveout.substring(0, 2000));
    }
  },
};
