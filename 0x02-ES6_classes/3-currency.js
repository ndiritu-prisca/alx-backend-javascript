export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    } else if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._code = code;
      this._name = name;
    }
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
