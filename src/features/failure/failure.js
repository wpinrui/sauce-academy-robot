/* eslint-disable import/no-extraneous-dependencies */
import { PythonShell } from 'python-shell';

export default class Failure {
  static isCommand = (msg) => msg.text.startsWith('/chat');

  static parseMsg = (msg) => {
    const content = msg.text.substring('/chat'.length).trim();
    const parsedMsg = {
      ...msg,
      text: content,
    };
    return parsedMsg;
  };

  static handler = async (bot, msg) => {
    const rng = Math.random() < 0.05;
    const results = await new Promise((resolve, reject) => {
      const options = {
        args: [msg.text],
      };
      PythonShell.run('qa_script.py', options).then((messages) => {
        resolve(messages);
      }).catch((err) => {
        reject(err);
      });
    });
    if (results.length > 0) {
      results.forEach(async (message) => {
        await bot.sendMessage(msg.chat.id, message);
      });
    } else {
      await bot.sendMessage(msg.chat.id, 'Oops! Something went wrong. 😟');
    }
    if (rng) {
      await bot.sendMessage(msg.chat.id, 'By the way, if you get sick of chatting with a bot, please feel free to reach out to a human instead! You have my handle :3');
    }
  };
}
