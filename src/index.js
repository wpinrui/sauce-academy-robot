// Import the necessary packages and modules
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import Authenticate from './core/authenticate';
import botParse from './core/parser';

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Listen for incoming messages
bot.on('message', async (msg) => {
  if (!Authenticate.isUserAuthenticated(msg.from.username)) {
    bot.sendMessage(msg.chat.id, Authenticate.authenticationFailureMessage);
    return;
  }
  // Successful authentication
  await botParse(bot, msg);
});
