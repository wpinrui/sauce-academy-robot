export default class Zoom {
  static relevantWords = {
    'zoom': 10,
    'lecture': 5,
    'lectures': 5,
    'lect': 4,
    'link': 2,
    'links': 2,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as request for zoom link.');
    await bot.sendMessage(msg.chat.id, 'https://canvas.nus.edu.sg/courses/45621/external_tools/124');
  };
}
