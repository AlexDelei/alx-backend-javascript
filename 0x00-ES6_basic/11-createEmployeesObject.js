/**
 * createEmployeesObject - return an object with department name and employees
 * @param {*} departmentName 
 * @param {*} employees 
 * @returns an objects with employees
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [`${departmentName}`]: employees
  };
};