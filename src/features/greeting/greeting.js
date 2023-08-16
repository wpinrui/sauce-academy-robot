export default class Greeting {
  static relevantWords = [
    'hi',
    'hello',
    'hey',
    'yo',
    'sup',
  ];

  static handler = async (bot, msg) => {
    const name = msg.from.first_name;
    await bot.sendMessage(msg.chat.id, `Hello ${name}! What can I do for you today? You can try typing naturally, or use keywords like "help", "consult", "recursion", "factorial" amongst others.`);
  };
}
