export default class About {
  static relevantWords = [
    'about',
    'who are you',
    'what are you',
    'what is this',
    'ivan',
  ];

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as "about"');
    await bot.sendMessage(msg.chat.id, 'This bot is created by Ivan (https://github.com/wpinrui) and is not officially affiliated with CS1101S.');
  };
}
