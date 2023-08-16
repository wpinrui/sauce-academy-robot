export default class Failure {
  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Sorry, I do not understand your message. If you think I should understand it, please use the /suggest command to suggest a keyword and what you think I should do with it. I strive to be better every day!');
  };
}
