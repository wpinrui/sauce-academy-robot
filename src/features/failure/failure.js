/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { PythonShell } from 'python-shell';
import State from '../../core/state';

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
    if (msg.text === '') {
      await bot.sendMessage(msg.chat.id, 'To use the chat, type /chat followed by your prompt (or most prompts will be interpreted as a desire to chat.)');
      return;
    }
    if (State.isGpuBusy) {
      await bot.sendMessage(msg.chat.id, 'I didn\'t understand your prompt. If you think I should, please use the "suggest" keyword to let me know!');
      return;
    }

    // Send the "waiting" message
    const waitingMessage = await bot.sendMessage(msg.chat.id, 'Thinking...');

    State.setGpuBusy();
    State.setBusy(msg.chat.id);

    try {
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
    } catch (error) {
      console.error('Error processing request:', error);
      await bot.sendMessage(msg.chat.id, 'An error occurred while processing your request. 😔');
    } finally {
      // Delete the "waiting" message
      await bot.deleteMessage(waitingMessage.chat.id, waitingMessage.message_id);
      State.setGpuNotBusy();
      State.setNotBusy(msg.chat.id);
    }
  };
}
