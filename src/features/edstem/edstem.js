export default class Edstem {
  static relevantWords = {
    'edstem': 10,
    'ed': 5,
    'forum': 10,
    'link': 2,
    'q&a': 5,
    'qna': 4,
    'question': 2,
    'answer': 1,
    'discussion': 1,
    'questions': 1,
    'answers': 1,
    'discussions': 1,
    'ask': 1,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as request for edstem link.');
    await bot.sendMessage(msg.chat.id, 'https://edstem.org/us/courses/42391/discussion/3326437');
  };
}
