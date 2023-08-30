export default class About {
  static relevantWords = {
    'about': 1,
    'who are you': 2,
    'what are you': 2,
    'what is this': 2,
    'abt': 1,
    'commands': 5,
    'command': 5,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as "about"');
    await bot.sendMessage(msg.chat.id, 'This bot is created by Ivan (https://github.com/wpinrui) and is not officially affiliated with CS1101S.');
    await bot.sendMessage(msg.chat.id, 'You can use the following commands:');
    const commnadString = `/start - Say hi to SauceBot!
/about - About SauceBot (and its Saucecode)
/consult - [COMING SOON] Book a consult
/feedback - Tell me how to improve the reflections!
/hello - Say hi to SauceBot... again!
/help - Get the help you need
/join - Join the Telegram group
/recording - Rewatch the lectures
/schedule - See what's due soon
/slides - Download the reflection slides
/suggest - Suggest a feature for SauceBot
/zoom - Get the lecture link
/chat - Like chatgpt but less good`;
    await bot.sendMessage(msg.chat.id, commnadString);
  };
}
