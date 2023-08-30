export default class Start {
  static relevantWords = {
    'start': 10, 'init': 5, 'begin': 2,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Hello! My name is SauceBot! I am a (very unofficial) CS1101S Bot! My target audience is my lovely students from Reflections 9D, 10D, 15C and 17C. Try typing to me naturally, or you can use the command palette to help!');
  };
}
