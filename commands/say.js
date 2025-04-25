module.exports = {
    name: 'say',
    description: 'Fait parler le bot.',
    async execute(message, args) {
      const text = args.join(' ');
      if (!text) return message.reply("Tu dois écrire un message.");
  
      await message.delete();
      message.channel.send(text);
    }
  };