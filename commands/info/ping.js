const { MessageEmbed } = require('discord.js')
module.exports = {
  name: `ping`,
  category: `info`,
  descriptiong: `API ping`,

  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args
   */

  run : async(client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Pong!')
    .setDescription(`Websocket ping is ${client.ws.ping}MS\nMessage edit ping is ${Math.floor(message.createdAt - message.createdAt)}MS!`)
    await message.channel.send(embed)
  }
}
