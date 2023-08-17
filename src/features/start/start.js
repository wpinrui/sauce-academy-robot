export default class Start {
  static relevantWords = {
    'start': 10, 'init': 5, 'begin': 2,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Hello! My name is SauceBot! I am a (very unofficial) CS1101S Bot! My target audience is my lovely students from Reflections 9D, 10D, 15C and 17C. Do note that only students from these classes will be able to use this bot, as this bot is not official and has nothing to do with SOC or the academic staff.');
  };
}
