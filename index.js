const discord = require("discord.js");
const config = require("./config.json");
require('dotenv').config();

const client = new discord.Client();

client.login(process.env.BOT_TOKEN);