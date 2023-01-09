const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);
require('dotenv').config();
const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
  console.log("Bot is online!");

  client.user.setActivity(`SetActivity Test`, { type: "PLAYING" });
})

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();


  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

  //Embeds
  const setupEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('Download Python')
    .setURL('https://www.python.org/downloads/')
    .setDescription('Download and setup the latest version of Python on your computer!')
    .setImage('https://i.imgur.com/3GmPd7O.png')
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const printEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('print() Function')
    .setDescription('Prints the message onto the screen/standard output.')
    .addFields({ name: 'Example: ', value: '``print("Hello World!")``', inline: false })
    .addFields({ name: 'Output: ', value: '``Hello World!``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const forEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('For Loop')
    .setDescription('For loop is used to iterate over lists, tuples, strings, etc.\n It is often  used in combination with the range() function.')
    .addFields({ name: 'Example: ', value: '``for i in range(5):\n       print(i, end=" ")``', inline: false })
    .addFields({ name: 'Output: ', value: '``0 1 2 3 4``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const whileEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('While Loop')
    .setDescription('While loop is used to execute instructions as long as the specified condition is true.')
    .addFields({ name: 'Example: ', value: '``i = 0\nwhile (i <= 5):\n         print(i, end=" ")\n         i = i + 1``', inline: false })
    .addFields({ name: 'Output: ', value: '``0 1 2 3 4 5``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const ifEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('If Statements')
    .setDescription('If the logical operation is true,  execute the instructions in the if statement.\n\nLogical operations can be created using the following: ')
    .addFields(
      { name: 'Equal:', value: '``x == y``', inline: true },
      { name: 'Not Equal:', value: '``x != y``', inline: true },
      { name: 'Greater Than:', value: '``x > y``', inline: true },
      { name: 'Greater Than or Equal:', value: '``x >= y``', inline: true },
      { name: 'Less Than:', value: '``x < y``', inline: true },
      { name: 'Less Than or Equal:', value: '``x <= y``', inline: true },
    )
    .addFields({ name: '\u200B', value: '\u200B' })
    .addFields({ name: '\n\nExample: ', value: '``x = 15\ny = 50\nif (x < y):\n         print("x is less than y")\nelse:\n         print("x is greater than y")``', inline: false })
    .addFields({ name: 'Output: ', value: '``x is less than y``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const arrayEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('Arrays')
    .setDescription('Arrays allow the user to store multiple values in a single variable.\nArrays in Python are ordered, mutible, and allow duplicate items.')
    .addFields({ name: 'Example: ', value: '``animals = ["dog","cat","lion","tiger"]\nprint(animals[0] + " " + animals[1] + " " + animals[2] + " " + animals[3])``', inline: false })
    .addFields({ name: 'Output: ', value: '``dog cat lion tiger``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const listEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('Lists')
    .setDescription('Lists allow the user to store multiple values in a single variable.\nLists in Python are ordered, mutible, and allow duplicate items.')
    .addFields({ name: 'Example: ', value: '``names = ["Bob","John","Noah","Frank"]\nprint(names[0] + " " + names[1] + " " + names[2] + " " + names[3])``', inline: false })
    .addFields({ name: 'Output: ', value: '``Bob John Noah Frank``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });


  const functionEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('Functions')
    .setDescription('A function is a set of instructions which only runs when it is called.\nFunctions are created using the ``def`` keyword and are used to avoid writing repetitive code.')
    .addFields({ name: 'Basic Addition Function Example: ', value: '``def addition (parameter1, parameter2):\n      add = parameter1 + parameter2\n      print(add)``', inline: false })
    .addFields({ name: 'Function Call: ', value: '``addition(15,5)``', inline: false })
    .addFields({ name: 'Output: ', value: '``20``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const dictEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('Dictionary')
    .setDescription('A dictionary is used to store values in ``key:value`` pairs.\nIn Python, a dictionary does not allow duplicate entries and is unordered.')
    .addFields({ name: 'Example: ', value: '``person = { "name":"Bob", "age":20, "job":"software developer"}\nprint(person["job"])``', inline: false })
    .addFields({ name: 'Output: ', value: '``software developer``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const castEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('Casting')
    .setDescription('Casting allows users to specifiy the data type of a variable.')
    .addFields({ name: 'int() Example: ', value: '``num = int(10)``', inline: false })
    .addFields({ name: 'Output: ', value: '``10``', inline: false })
    .addFields({ name: 'str() Example: ', value: '``string = str(10)``', inline: false })
    .addFields({ name: 'Output: ', value: '``\'10\'``', inline: false })
    .addFields({ name: 'float() Example: ', value: '``flt = float(10)``', inline: false })
    .addFields({ name: 'Output: ', value: '``10.0``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const catEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('String Concatenation')
    .setDescription('To concatenate multiple strings in Python, we use the ``+`` operator.')
    .addFields({ name: 'Example: ', value: '``name = "John"\nlastName = "Doe"\n\nfullName = name + " " + lastName\n\nprint(fullName)``', inline: false })
    .addFields({ name: 'Output: ', value: '``John Doe``', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  const helpEmbed = new EmbedBuilder()
    .setColor(0x8F11F8)
    .setTitle('Help')
    .setDescription('Help!')
    .addFields({ name: 'Basic Functionality', value: 'Commands are called using the ``>`` operator, followed by a command name', inline: false })
    .addFields({ name: 'Commands: ', value: '>setup\n>print\n>forloop\n>whileloop\n>ifstatement\n>arrays\n>lists\n>functions\n>dictionary\n>casting\n>concatenation', inline: false })
    .setTimestamp()
    .setFooter({ text: 'PyBot', iconURL: 'https://i.imgur.com/z2BUMnd.jpg' });

  //Call Commands

  if (command === 'setup') {
    message.channel.send({ embeds: [setupEmbed] });
  }

  if (command === 'print') {
    message.channel.send({ embeds: [printEmbed] });
  }

  if (command === 'forloop') {
    message.channel.send({ embeds: [forEmbed] });
  }

  if (command === 'whileloop') {
    message.channel.send({ embeds: [whileEmbed] });
  }

  if (command === 'ifstatement') {
    message.channel.send({ embeds: [ifEmbed] });
  }

  if (command === 'arrays') {
    message.channel.send({ embeds: [arrayEmbed] });
  }

  if (command === 'lists') {
    message.channel.send({ embeds: [listEmbed] });
  }

  if (command === 'functions') {
    message.channel.send({ embeds: [functionEmbed] });
  }

  if (command === 'dictionary') {
    message.channel.send({ embeds: [dictEmbed] });
  }

  if (command === 'casting') {
    message.channel.send({ embeds: [castEmbed] });
  }

  if (command === 'concatenation') {
    message.channel.send({ embeds: [catEmbed] });
  }

  if (command === 'help') {
    message.channel.send({ embeds: [helpEmbed] });
  }

})

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

client.login(process.env.TOKEN);