module.exports = {
  handleReaction: async (reaction, user) => {
    reaction.message.reply('> ' + user.username + ' reacted with ' + reaction.emoji.name)
  },
}