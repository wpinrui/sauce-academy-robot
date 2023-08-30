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
    'boring': 1,
    'bored': 1,
    'not good': 1,
    'not great': 1,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as desire to give feedback.');
    await bot.sendMessage(msg.chat.id, 'https://forms.gle/xJFavYHCvKnViEaZ8');
  };
}
