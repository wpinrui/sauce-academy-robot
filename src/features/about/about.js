export default class About {
  static relevantWords = {
    'about': 1,
    'who are you': 2,
    'what are you': 2,
    'what is this': 2,
    'abt': 1,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as "about"');
    await bot.sendMessage(msg.chat.id, 'This bot is created by Ivan (https://github.com/wpinrui) and is not officially affiliated with CS1101S.');
  };
}
