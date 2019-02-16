//Well written, clear and concise. Good job! These were very well written for someone new to Manchester Codes, keep it up!
const getEmployerRole = (employeeName, employees) => {
    return employees.find(employee => employee.name === employeeName).role;
}

module.exports = getEmployerRole
