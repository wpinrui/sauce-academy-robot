/* eslint-disable no-await-in-loop */
import assignments from './scheduleData';

export default class Schedule {
  static relevantWords = [
    'schedule',
    'mission',
    'missions',
    'path',
    'paths',
    'quest',
    'quests',
    'contest',
    'contests',
    'when',
    'due',
    'submit',
    'date',
    'dates',
    'assignment',
    'assignments',
    'homework',
    'work',
  ];

  static handler = async (bot, msg) => {
    const { ongoing, upcoming } = Schedule.getAssignments();
    const messageOptions = {
      parse_mode: 'Markdown',
    };
    const ongoingWithDaysRemaining = ongoing.map((assignment) => {
      const daysRemaining = Schedule.getDaysRemaining(assignment.end);
      return {
        ...assignment,
        daysRemaining,
      };
    });
    const upcomingWithDaysRemaining = upcoming.map((assignment) => {
      const daysRemaining = Schedule.getDaysRemaining(assignment.start);
      return {
        ...assignment,
        daysRemaining,
      };
    });
    if (ongoingWithDaysRemaining.length === 0) {
      await bot.sendMessage(msg.chat.id, 'There are no ongoing assignments. Hooray!');
    } else {
      await bot.sendMessage(msg.chat.id, 'Here are the ongoing assignments:');
      for (let i = 0; i < ongoingWithDaysRemaining.length; i += 1) {
        const assignmentString = Schedule.getAssignmentStringDue(ongoingWithDaysRemaining[i]);
        await bot.sendMessage(msg.chat.id, `${i + 1}. ${assignmentString}`, messageOptions);
      }
    }
    if (upcomingWithDaysRemaining.length === 0) {
      await bot.sendMessage(msg.chat.id, 'There are no upcoming assignments.');
    } else {
      await bot.sendMessage(msg.chat.id, 'Here are the upcoming assignments:');
      for (let i = 0; i < upcomingWithDaysRemaining.length; i += 1) {
        const assignmentString = Schedule.getAssignmentStringUpcoming(upcomingWithDaysRemaining[i]);
        await bot.sendMessage(msg.chat.id, `${i + 1}. ${assignmentString}`, messageOptions);
      }
    }
    await bot.sendMessage(msg.chat.id, 'Remember that you can always contact me, or your Avenger, if you have any problem with the assignments! :)');
  };

  static getAssignments = () => {
    const now = new Date();
    const upcomingThreshold = new Date(now);
    upcomingThreshold.setDate(upcomingThreshold.getDate() + 3);
    const assignmentsWithTimeRemaining = assignments.map((assignment) => {
      const timeRemaining = assignment.end - now;
      return {
        ...assignment,
        timeRemaining,
      };
    });
    const sortedAssignments = assignmentsWithTimeRemaining.sort((a, b) => a.timeRemaining - b.timeRemaining);
    const ongoingAssignments = sortedAssignments.filter((assignment) => assignment.start <= now && assignment.end >= now);
    const upcomingAssignments = sortedAssignments.filter((assignment) => assignment.start >= now && assignment.start <= upcomingThreshold);
    return {
      ongoing: ongoingAssignments,
      upcoming: upcomingAssignments,
    };
  };

  static getDaysRemaining = (date) => {
    const now = new Date();
    const timeRemaining = date - now;
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  static getAssignmentStringDue = (assignmentWithDaysRemaining) => {
    const { title, daysRemaining, end } = assignmentWithDaysRemaining;
    // eslint-disable-next-line no-nested-ternary
    const daysRemainingString = daysRemaining === 0 ? '*Today*' : daysRemaining === 1 ? '*Tomorrow*' : `${daysRemaining} days remaining`;
    const dueDateString = Schedule.parseReadableDate(end);
    return `*${title}*: due ${dueDateString} (${daysRemainingString})`;
  };

  static getAssignmentStringUpcoming = (assignmentWithDaysRemaining) => {
    const { title, start } = assignmentWithDaysRemaining;
    return `*${title}* (opens on ${Schedule.getDayFromDate(start)})`;
  };

  static parseReadableDate(date) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const monthIndex = date.getMonth();
    const day = date.getDate();

    if (monthIndex >= 0 && monthIndex < months.length) {
      const month = months[monthIndex];
      return `${month} ${day}`;
    }

    return 'Invalid date';
  }

  static getDayFromDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
}
