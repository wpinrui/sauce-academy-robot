export default class Feedback {
  static relevantWords = {
    'feedback': 10,
    'feedbacks': 10,
    'suggestion': 5,
    'suggestions': 5,
    'reflection': 6,
    'reflections': 6,
    'improvement': 4,
    'improvements': 4,
    'improve': 3,
    'lesson': 2,
    'lessons': 2,
    'enjoy': 2,
    'enjoyed': 2,
    'good': 1,
    'great': 1,
    'awesome': 1,
    'fantastic': 1,
    'amazing': 1,
    'nice': 1,
    'cool': 1,
    'bad': 1,
    'terrible': 1,
    'horrible': 1,
    'suck': 1,
    'boring': 1,
    'bored': 1,
    'sian': 1,
    'sianz': 1,
    'crap': 1,
    'not good': 1,
    'not great': 1,
    'not bad': 1,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as desire to give feedback.');
    await bot.sendMessage(msg.chat.id, 'https://forms.gle/xJFavYHCvKnViEaZ8');
  };
}
