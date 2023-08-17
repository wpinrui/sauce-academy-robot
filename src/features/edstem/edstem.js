export default class Edstem {
  static relevantWords = [
    'edstem',
    'ed',
    'forum',
    'link',
    'q&a',
    'qna',
    'question',
    'answer',
    'discussion',
    'questions',
    'answers',
    'discussions',
    'ask',
  ];

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as request for edstem link.');
    await bot.sendMessage(msg.chat.id, 'https://edstem.org/us/courses/42391/discussion/3326437');
  };
}
