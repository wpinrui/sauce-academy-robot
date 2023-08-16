// Import the necessary packages and modules
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import Authenticate from './core/authenticate';
import botParse from './core/parser';
import State from './core/state';
import Failure from './features/failure/failure';

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Listen for incoming messages
bot.on('message', async (msg) => {
  if (State.isBusy) {
    return;
  }
  if (!Authenticate.isUserAuthenticated(msg.from.username)) {
    bot.sendMessage(msg.chat.id, Authenticate.authenticationFailureMessage);
    return;
  }
  // Successful authentication
  if (Failure.isCommand(msg)) {
    Failure.handler(bot, Failure.parseMsg(msg));
    return;
  }

  await botParse(bot, msg);
});
