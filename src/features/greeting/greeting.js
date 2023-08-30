export default class Greeting {
  static relevantWords = {
    'hi': 4,
    'hello': 5,
    'hey': 1,
    'yo': 2,
    'sup': 3,
  };

  static handler = async (bot, msg) => {
    const name = msg.from.first_name;
    await bot.sendMessage(msg.chat.id, `Hello ${name}! I'm SauceBot. What can I do for you today? You can try typing naturally, or use keywords like "help", "lecture", "slides", amongst others. Or use the command palette to help!`);
    await bot.sendMessage(msg.chat.id, 'If you choose to chat with the bot, please note that I did not make the model, so the responses most likely make no sense whatsoever :\'(');
  };
}
