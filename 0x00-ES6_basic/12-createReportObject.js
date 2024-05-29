/**
 * createReportObject - object with goodstuff
 * @param { the return values of the previous function } employeesList 
 * @returns  an object with keys that return data
 */
export default function createReportObject(employeesList) {
  const allEmployees = {...employeesList};
  const getNumberOfDepartments = (data) => {
    return Object.keys(data).length;
  };

  return {allEmployees, getNumberOfDepartments};
}