/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import Sentiment from 'sentiment';
import About from '../features/about/about';
import Start from '../features/start/start';
import Greeting from '../features/greeting/greeting';
import Failure from '../features/failure/failure';
import Help from '../features/help/help';
import ChatPositive from '../features/chat/chatPositive';
import ChatNegative from '../features/chat/chatNegative';

const CLASSES = [About, Greeting, Start, Help];

// eslint-disable-next-line no-useless-escape
const replacePunctuationWithSpace = (str) => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ');

export default async function botParse(bot, msg) {
  // Logic for determining exchange type
  const messageText = msg.text;
  console.log(`\nMessage: ${messageText}`);
  let bestClass = null;
  let highestScore = 0;
  CLASSES.forEach((Class) => {
    const score = Class.relevantWords.reduce((acc, word) => {
      if (replacePunctuationWithSpace(messageText).toLowerCase().split(' ').includes(word)) {
        return acc + 2 * (1 / Class.relevantWords.length); // Account for classes having multiple relevant words
      }
      return acc;
    }, 0);
    console.log(`Class: ${Class.name}, Score: ${score}`);
    if (score > highestScore) {
      highestScore = score;
      bestClass = Class;
    }
  });
  if (bestClass) {
    await bestClass.handler(bot, msg);
    return;
  }

  // No match, so we'll just chat based on sentiment
  const sentiment = new Sentiment();
  const options = {
    extras: {
      la: 0,
      walao: -1,
    },
  };
  const result = sentiment.analyze(messageText, options);
  const sentimentObject = {
    score: result.score,
    comparative: result.comparative,
    tokens: result.tokens,
    words: result.words,
    positiveWords: result.positive.map((word) => word.toLowerCase()),
    negativeWords: result.negative.map((word) => word.toLowerCase()),
  };
  console.log(`Message: ${messageText}`);
  console.log(`Score: ${sentimentObject.score}`);

  if (sentimentObject.score > 0) {
    await ChatPositive.handler(bot, msg);
  } else if (sentimentObject.score < 0) {
    await ChatNegative.handler(bot, msg);
  } else {
    await Failure.handler(bot, msg);
  }
}
