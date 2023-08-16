const AUTHENTICATED_USERS = [
  'wpinrui',
];

export default class Authenticate {
  static isUserAuthenticated = (username) => AUTHENTICATED_USERS.includes(username);

  static authenticationFailureMessage = 'Sorry, I am only allowed to talk to students of Reflections 9D, 10D, 15C and 17C. If you are from my class, please let me know your Telegram handle so that I can add you to the list!';
}
