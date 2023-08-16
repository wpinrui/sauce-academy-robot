export default class ChatNegative {
  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Sorry to hear that. Let me know if you need any specific help or consultations etc!');
  };
}
