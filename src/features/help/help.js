export default class Help {
  static relevantWords = [
    'fuck', 'wtf', 'confused',
    'understand', 'explain', 'idgi', 'idk', 'wts', 'wth', 'struggling', 'problem', 'bug', 'stupid', 'shit', 'issue',
  ];

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Detecting that you need help.');
    await bot.sendMessage(msg.chat.id, 'Do you need help with CS1101S? Try checking the following resources:');
    await bot.sendMessage(msg.chat.id, '1. The Ed discussion: https://edstem.org/us/courses/42391/discussion/3326437');
    await bot.sendMessage(msg.chat.id, '2. The lecture resources: https://canvas.nus.edu.sg/courses/45621/files/folder/Lecture%20and%20Brief%20Slides');
    await bot.sendMessage(msg.chat.id, '3. The Reflection Google Drive: https://drive.google.com/drive/folders/1STwlPtSjbQUi_IS0NrPLil3CFXUEaZHb?usp=sharing');
    await bot.sendMessage(msg.chat.id, '4. Ask your avenger or reflection tutor for help! Try the "consult" keyword.');
    await bot.sendMessage(msg.chat.id, "5. Last but not least, if you don't need a consultation and just want a quick explanation, do not hesitate to ask Ivan directly :) Either use the keyword \"askivan\", or just message @wpinrui directly.");
  };
}
