// Import the necessary packages and modules
import TelegramBot from 'node-telegram-bot-api';
import {
  handleAbout, isAbout, handleHelp, isHelp, isStart, isGreeting, handleGreeting, handleStart,
} from './about';

const permittedNames = [
  'wpinrui', // Ivan
];

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Listen for incoming messagescls
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const { username } = msg.from;
  const messageText = msg.text;
  if (!permittedNames.includes(username)) {
    bot.sendMessage(chatId, 'Please do not use this bot. It is only for my students.');
    return;
  }

  if (isStart(messageText)) {
    await handleStart(bot, msg);
    return;
  }

  if (isGreeting(messageText)) {
    await handleGreeting(bot, msg);
    return;
  }

  if (isAbout(messageText)) {
    await handleAbout(bot, msg);
    return;
  }

  if (isHelp(messageText)) {
    await handleHelp(bot, msg);
    return;
  }

  bot.sendMessage(chatId, 'Sorry, I do not understand your message. If you think I should understand it, please use the /suggest command to suggest a keyword and what you think I should do with it.');
});
