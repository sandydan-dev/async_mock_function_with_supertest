const employees = [
    { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' },
    { 'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'department': 'Marketing' },
    { 'id': 3, 'name': 'Michael Johnson', 'email': 'michael.johnson@example.com', 'department': 'Sales' },
    { 'id': 4, 'name': 'Sarah Lee', 'email': 'sarah.lee@example.com', 'department': 'IT' },
    { 'id': 5, 'name': 'Tom Brown', 'email': 'tom.brown@example.com', 'department': 'Finance' },
    { 'id': 6, 'name': 'Emily White', 'email': 'emily.white@example.com', 'department': 'HR' },
    { 'id': 7, 'name': 'David Wilson', 'email': 'david.wilson@example.com', 'department': 'Engineering' },
    { 'id': 8, 'name': 'Lisa Garcia', 'email': 'lisa.garcia@example.com', 'department': 'Marketing' },
    { 'id': 9, 'name': 'Kevin Taylor', 'email': 'kevin.taylor@example.com', 'department': 'Sales' },
    { 'id': 10, 'name': 'Amy Anderson', 'email': 'amy.anderson@example.com', 'department': 'IT' },
    { 'id': 11, 'name': 'James Davis', 'email': 'james.davis@example.com', 'department': 'Finance' },
    { 'id': 12, 'name': 'Rebecca Harris', 'email': 'rebecca.harris@example.com', 'department': 'HR' },
    { 'id': 13, 'name': 'Christopher Martin', 'email': 'christopher.martin@example.com', 'department': 'Engineering' },
    { 'id': 14, 'name': 'Elizabeth Thompson', 'email': 'elizabeth.thompson@example.com', 'department': 'Marketing' },
    { 'id': 15, 'name': 'Matthew Clark', 'email': 'matthew.clark@example.com', 'department': 'Sales' },
    { 'id': 16, 'name': 'Natalie Rodriguez', 'email': 'natalie.rodriguez@example.com', 'department': 'IT' },
    { 'id': 17, 'name': 'Brian Moore', 'email': 'brian.moore@example.com', 'department': 'Finance' },
    { 'id': 18, 'name': 'Patricia Hall', 'email': 'patricia.hall@example.com', 'department': 'HR' },
    { 'id': 19, 'name': 'Steven Lewis', 'email': 'steven.lewis@example.com', 'department': 'Engineering' },
    { 'id': 20, 'name': 'Karen Walker', 'email': 'karen.walker@example.com', 'department': 'Marketing' }
]


function getAllemployees() {
    return employees
}


function getEmployeesById(id) {
    return employees.find((emp) => emp.id === id)
}


// filter employees by department
function getEmployeesByDepartment(department) {
    let result = employees.filter((dept) => {
        if (dept.department === department) {
            return `departement got id, ${dept}`
        } else {
            return null
        }
    })
    return result
}

// update email from employees
function updateEmployeesByEmail(id, mail) {
    return employees.find((m) => {
        if (m.id === id) {
            return m.email = mail
        }
    })

}

function deleteEmployeesByid(id) {

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees.splice(i, 1)
            return employees
        } else {
            return employees

        }
    }

}


module.exports = {
    getAllemployees,
    getEmployeesById,
    getEmployeesByDepartment,
    updateEmployeesByEmail,
    deleteEmployeesByid
}

