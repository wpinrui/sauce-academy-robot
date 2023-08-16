export default class About {
  static relevantWords = [
    'about',
    'who are you',
    'what are you',
    'what is this',
    'ivan',
  ];

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as "about"');
    await bot.sendMessage(msg.chat.id, 'This bot is created by Ivan (https://github.com/wpinrui) and is not officially affiliated with CS1101S.');
  };
}

export const isHelp = (messageText) => messageText.toLowerCase().includes('help')
    || messageText.toLowerCase().includes('fuck')
    || messageText.toLowerCase().includes('wtf')
    || messageText.toLowerCase().includes('confused')
    || messageText.toLowerCase().includes('understand')
    || messageText.toLowerCase().includes('explain')
    || messageText.toLowerCase().includes('idgi')
    || messageText.toLowerCase().includes('wts')
    || messageText.toLowerCase().includes('wth')
    || messageText.toLowerCase().includes('struggling')
    || messageText.toLowerCase().includes('problem')
    || messageText.toLowerCase().includes('bug')
    || messageText.toLowerCase().includes('stupid')
    || messageText.toLowerCase().includes('shit')
    || messageText.toLowerCase().includes('issue');

export const handleHelp = async (bot, msg) => {
  await bot.sendMessage(msg.chat.id, 'Detecting that you need help.');
  await bot.sendMessage(msg.chat.id, 'Do you need help with CS1101S? Try checking the following resources:');
  await bot.sendMessage(msg.chat.id, '1. The Ed discussion: https://edstem.org/us/courses/42391/discussion/3326437');
  await bot.sendMessage(msg.chat.id, '2. The lecture resources: https://canvas.nus.edu.sg/courses/45621/files/folder/Lecture%20and%20Brief%20Slides');
  await bot.sendMessage(msg.chat.id, '3. The Reflection Google Drive: https://drive.google.com/drive/folders/1STwlPtSjbQUi_IS0NrPLil3CFXUEaZHb?usp=sharing');
  await bot.sendMessage(msg.chat.id, '4. Ask your avenger or reflection tutor for help! Try the "consult" keyword.');
};
