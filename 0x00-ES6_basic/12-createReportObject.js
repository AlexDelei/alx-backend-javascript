export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  const getNumberOfDepartments = (data) => Object.keys(data).length;

  return {
    allEmployees,
    getNumberOfDepartments
  };
}