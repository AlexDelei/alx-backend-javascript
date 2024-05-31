export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('Students must be an array');
    for (const std of students) {
        if (typeof std !== 'string') throw new TypeError('Students must contain strings')
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!val.isArray()) {
      throw new TypeError('Students must be an array');
    }
    for (const std of val) {
      if (typeof std !== 'string') {
        throw new TypeError('Students must contain strings');
      }
    }
    this._students = val;
  }
}
