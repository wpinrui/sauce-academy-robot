export default class Consult {
  static relevantWords = {
    'consult': 10,
    'consults': 10,
    'consultation': 10,
    'consultations': 10,
    'book': 5,
    'booking': 5,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as request for consultation booking.');
    await bot.sendMessage(msg.chat.id, 'This feature is under construction. For now, please contact me directly @wpinrui :)');
  };
}
