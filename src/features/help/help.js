export default class Help {
  static relevantWords = {
    'fuck': 3,
    'wtf': 2,
    'confused': 4,
    'understand': 1,
    'explain': 2,
    'idgi': 3,
    'idk': 2,
    'wts': 4,
    'wth': 4,
    'struggling': 4,
    'problem': 2,
    'trouble': 3,
    'bug': 2,
    'stupid': 2,
    'shit': 1,
    'issue': 2,
    'help': 5,
    'mission': 2,
    'missions': 2,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Detecting that you need help.');
    await bot.sendMessage(msg.chat.id, 'Do you need help with CS1101S? Try checking the following resources:');
    await bot.sendMessage(msg.chat.id, '1. The Ed discussion: https://edstem.org/us/courses/42391/discussion/3326437');
    await bot.sendMessage(msg.chat.id, '2. The lecture resources: https://canvas.nus.edu.sg/courses/45621/files/folder/Lecture%20and%20Brief%20Slides');
    await bot.sendMessage(msg.chat.id, '3. The Reflection Google Drive: https://drive.google.com/drive/folders/1STwlPtSjbQUi_IS0NrPLil3CFXUEaZHb?usp=sharing');
    await bot.sendMessage(msg.chat.id, '4. Ask your avenger or reflection tutor for help! Try the "consult" keyword.');
    await bot.sendMessage(msg.chat.id, "5. Last but not least, if you don't need a consultation and just want a quick explanation, do not hesitate to ask me directly :) Either use the keyword \"askivan\", or just message @wpinrui directly.");
  };
}
