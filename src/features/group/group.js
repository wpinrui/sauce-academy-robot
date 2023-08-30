import State from '../../core/state';

/* eslint-disable no-param-reassign */
export default class Group {
  static relevantWords = {
    'join': 10,
    'group': 10,
    'groups': 10,
    'telegram': 10,
    'reflection': 2,
    'r09d': 10,
    'r11d': 10,
    'r15c': 10,
    'r17c': 10,
  };

  static handler = async (bot, msg) => {
    await bot.sendMessage(msg.chat.id, 'Interpreting as request to join Telegram group.');
    // Set keyboard options: GroupA, GroupB, GroupC
    const options = {
      reply_markup: {
        keyboard: [
          ['R09D'],
          ['R11D'],
          ['R15C'],
          ['R17C'],
        ],
        one_time_keyboard: true,
      },
    };
    // If message is exactly the group, join the group immediately
    if (msg.text === 'R09D') {
      await bot.sendMessage(msg.chat.id, 'https://t.me/+plh_IgE3-KIyMDhl');
      return;
    } if (msg.text === 'R11D') {
      await bot.sendMessage(msg.chat.id, 'https://t.me/+NgyfmOxr1Es5YmU1');
      return;
    } if (msg.text === 'R15C') {
      await bot.sendMessage(msg.chat.id, 'https://t.me/+T_I5KAdhBjw5NzU1');
      return;
    } if (msg.text === 'R17C') {
      await bot.sendMessage(msg.chat.id, 'https://t.me/+KSxgze7T5TowZGE1');
      return;
    }
    await bot.sendMessage(msg.chat.id, 'Please select your group:', options);
    State.setBusy(msg.chat.id);
    // Read selection and send invite link
    bot.on('message', async (response) => {
      if (response.text === 'R09D') {
        await bot.sendMessage(response.chat.id, 'https://t.me/+plh_IgE3-KIyMDhl');
      } else if (response.text === 'R11D') {
        await bot.sendMessage(response.chat.id, 'https://t.me/+NgyfmOxr1Es5YmU1');
      } else if (response.text === 'R15C') {
        await bot.sendMessage(response.chat.id, 'https://t.me/+T_I5KAdhBjw5NzU1');
      } else if (response.text === 'R17C') {
        await bot.sendMessage(response.chat.id, 'https://t.me/+KSxgze7T5TowZGE1');
      }
      State.setNotBusy(msg.chat.id);
    });
  };
}
