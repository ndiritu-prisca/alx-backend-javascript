export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    } else if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    } else {
      this._size = size;
      this._location = location;
    }
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Setter for size
  set size(newSize) {
    if (typeof newSize !== 'number') {
      throw TypeError('Size must be a number');
    }
    this._size = newSize;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Setter for location
  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._location = newLocation;
  }

  [Symbol.toPrimitive](value) {
    if (value === 'number') {
      return this._size;
    }
    if (value === 'string') {
      return this._location;
    }
    return this;
  }
}
