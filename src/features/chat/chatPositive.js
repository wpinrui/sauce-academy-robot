export default class ChatPositive {
  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Nice! :)');
  };
}
