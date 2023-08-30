/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import Sentiment from 'sentiment';
import About from '../features/about/about';
import Start from '../features/start/start';
import Greeting from '../features/greeting/greeting';
import Failure from '../features/failure/failure';
import Help from '../features/help/help';
import ChatPositive from '../features/chat/chatPositive';
import ChatNegative from '../features/chat/chatNegative';
import Suggest from '../features/suggest/suggest';
import Schedule from '../features/schedule/schedule';
import Edstem from '../features/edstem/edstem';
import Recording from '../features/recording/recording';
import Zoom from '../features/zoom/zoom';
import Feedback from '../features/feedback/feedback';
import Group from '../features/group/group';
import Slides from '../features/slides/slides';
import Consult from '../features/consult/consult';

const CLASSES = [About, Greeting, Start, Help, Suggest, Schedule, Edstem, Recording, Zoom, Feedback, Group, Slides, Consult];

// eslint-disable-next-line no-useless-escape
const punctuationRegex = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
const replacePunctuationWithSpace = (str) => str.replace(punctuationRegex, ' ');

function getDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hour = `${date.getHours()}`.padStart(2, '0');
  const minute = `${date.getMinutes()}`.padStart(2, '0');
  const second = `${date.getSeconds()}`.padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export default async function botParse(bot, msg, state) {
  const messageText = msg.text;
  const logMessage = `${messageText},${msg.from.username},${
    msg.from.first_name} ${msg.from.last_name},${getDateTime()}\n`;
  fs.appendFile('C:\\Users\\Ivan\\Documents\\GitHub\\cs1101sbot\\logs.csv', logMessage, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    }
  });
  let bestClass = null;
  let highestScore = 0;
  CLASSES.forEach((Class) => {
    let score = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const word in Class.relevantWords) {
      if (replacePunctuationWithSpace(messageText).toLowerCase().split(' ').includes(word)) {
        score += Class.relevantWords[word];
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestClass = Class;
    }
  });

  if (bestClass) {
    await bestClass.handler(bot, msg, state);
    return;
  }

  // No match, so we'll just chat based on sentiment
  const sentiment = new Sentiment();
  const options = {
    extras: {
      la: 0,
      walao: -1,
      ok: 1,
      okay: 1,
      okie: 1,
      thx: 1,
      nvm: -1,
      nevermind: -1,
      kk: -1,
      k: -1,
      kthx: 1,
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

  if (sentimentObject.comparative >= 1.5) {
    await ChatPositive.handler(bot, msg);
  } else if (sentimentObject.comparative <= -1.5) {
    await ChatNegative.handler(bot, msg);
  } else {
    await Failure.handler(bot, msg);
  }
}
