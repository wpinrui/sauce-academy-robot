/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { App } from 'octokit';
import State from '../../core/state';

export default class Suggest {
  static relevantWords = ['suggest'];

  static createIssue = async (msg, keyword, description) => {
    const app = new App({
      appId: process.env.GITHUB_APP_ID,
      privateKey: process.env.GITHUB_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    console.log(process.env.GITHUB_PRIVATE_KEY.replace(/\\n/g, '\n'));

    const octokit = await app.getInstallationOctokit(process.env.GITHUB_INSTALLATION_ID);
    await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner: 'wpinrui',
      repo: 'cs1101sbot',
      title: `[SUGGESTION]: ${keyword}`,
      body: `${description}\n\nSuggested by ${msg.from.username} (${msg.from.first_name} ${msg.from.last_name})`,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Please enter the keyword you think I should respond to.');
    State.isBusy = true;
    const keywordMessage = await new Promise((resolve) => {
      bot.on('message', resolve);
    });
    await bot.sendMessage(msg.chat.id, 'Thanks for the suggestion! Please enter a description of what it should do.');
    const descriptionMessage = await new Promise((resolve) => {
      bot.on('message', resolve);
    });
    await bot.sendMessage(msg.chat.id, 'Thanks for the suggestion! I\'ll pass it on to my creator.');
    await Suggest.createIssue(msg, keywordMessage.text, descriptionMessage.text);
    State.isBusy = false;
  };
}
