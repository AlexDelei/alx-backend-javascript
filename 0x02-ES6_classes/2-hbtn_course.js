export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!val.isArray()) {
      throw new Error('Students must be an array');
    }
    this._students = val;
  }
}
