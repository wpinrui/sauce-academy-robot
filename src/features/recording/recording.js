export default class Recording {
  static relevantWords = {
    'recording': 10,
    'recordings': 10,
    'recorded': 5,
    'lecture': 5,
    'lectures': 5,
    'lect': 4,
    'vid': 2,
    'video': 3,
    'videos': 3,
    'link': 2,
    'links': 2,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as request for lecture recordings.');
    await bot.sendMessage(msg.chat.id, 'https://canvas.nus.edu.sg/courses/45621/external_tools/128');
  };
}
