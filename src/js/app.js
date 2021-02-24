export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const reg1 = /^(?![-_0-9])[a-zA-Z0-9_-]*(?<![-_0-9])$/;
    const reg2 = /\d{4,}/;
    if (this.username.length === 0) {
      throw new Error('Username is too short');
    }
    if (reg1.exec(this.username) == null) {
      throw new Error('Username must begin and end with letters and contain only letters, didgits or "_" and "-" signs');
    }
    if (reg2.exec(this.username)) {
      throw new Error('Username must not contain more than 3 digits in a row');
    }

    return this.username;
  }
}
