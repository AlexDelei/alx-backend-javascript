/**
 * getListStudents - constructing an array of objects
 * @returns an array of objects
 */
export default function getListStudents() {
  const x = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const y = { id: 2, firstName: 'James', location: 'Columbia' };
  const z = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  return [x, y, z];
}
