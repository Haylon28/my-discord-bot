require('dotenv').config();
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
});

client.commands = new Collection();
const prefix = process.env.PREFIX;

// Chargement des commandes
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const mentionResponses = require('./mentions/responses.js');

client.on('messageCreate', async message => {
  if (message.author.bot) return;

  const isMentioned = message.mentions.has(client.user);

  if (isMentioned) {
    const contentWithoutMention = message.content.replace(`<@${client.user.id}>`, '').trim();
    const response = contentWithoutMention
      ? mentionResponses.getRandomResponseWithMessage()
      : mentionResponses.getSimpleResponse();

    return message.reply(response);
  }

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (command) command.execute(message, args);
});

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.login(process.env.TOKEN);