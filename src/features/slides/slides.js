export default class Slides {
  static relevantWords = {
    'slide': 10,
    'slides': 10,
    'reflection': 6,
    'reflections': 6,
    'powerpoint': 5,
    'powerpoints': 5,
    'ppt': 4,
    'pdf': 4,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as request for reflection slides.');
    await bot.sendMessage(msg.chat.id, 'https://drive.google.com/drive/folders/1GzutmVvtVTSX-8oseTBMlRGT9C1p0xFM');
  };
}
