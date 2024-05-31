export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() { // Casting to Integer
    return this._size;
  }

  toString() { // Casting into string
    return this._location;
  }
}