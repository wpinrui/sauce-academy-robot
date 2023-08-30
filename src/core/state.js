export default class State {
  static table = {};

  static isGpuBusy = false;

  static isBusy(chatId) {
    // Check if chatId in table
    if (State.table[chatId] === undefined) {
      return false;
    }
    return State.table[chatId] === true;
  }

  static setBusy(chatId) {
    State.table[chatId] = true;
    console.log(State.table);
  }

  static setNotBusy(chatId) {
    State.table[chatId] = false;
    console.log(State.table);
  }

  static setGpuBusy() {
    State.isGpuBusy = true;
  }

  static setGpuNotBusy() {
    State.isGpuBusy = false;
  }
}
