const { getAllemployees, getEmployeesById, getEmployeesByDepartment, updateEmployeesByEmail,
    deleteEmployeesByid } = require('../controllers/employee.controller')

const http = require('http')
const { app } = require('../index')

jest.mock('../controllers/employee.controller.js', () => ({
    ...jest.requireActual('../controllers/employee.controller.js'),
    getAllemployees: jest.fn(),
    getEmployeesById: jest.fn(),
    getEmployeesByDepartment: jest.fn(),
    updateEmployeesByEmail: jest.fn(),
    deleteEmployeesByid: jest.fn()
}))


let server;

beforeAll((done) => {
    server = http.createServer(app)
    server.listen(3001, done)
})

afterAll((done) => {
    server.close(done)
})


describe('employee mock function', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('should return all employee data', async () => {
        let mockEmp = [
            { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' },
            { 'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'department': 'Marketing' },
        ]

        getAllemployees.mockReturnValue(mockEmp)
        let result = await getAllemployees()
        expect(result).toEqual(mockEmp)
        expect(result.length).toBe(2)
        expect(getAllemployees).toHaveBeenCalled()
    })

    // get employee by id
    test('should return employee id', async () => {
        let mockEmp = { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' }
        getEmployeesById.mockReturnValue(mockEmp)
        let result = await getEmployeesById(1)
        expect(result).toEqual(mockEmp)
        expect(getEmployeesById).toHaveBeenCalledWith(1)
    })

    // return undefined if not found
    test('should return undefined if id not found', async ()=>{
        getEmployeesById.mockReturnValue(undefined)
        let result = getEmployeesById(123)
        expect(result).toBeUndefined()
        expect(getEmployeesById).toHaveBeenCalledWith(123)
    })

    // get employees by department
    test('should return department from employee data', async () => {
        let mockEmp = [
            { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' },
            { 'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'department': 'Marketing' },
            { 'id': 3, 'name': 'Michael Johnson', 'email': 'michael.johnson@example.com', 'department': 'Sales' },
            { 'id': 4, 'name': 'Sarah Lee', 'email': 'sarah.lee@example.com', 'department': 'IT' },
            { 'id': 5, 'name': 'Tom Brown', 'email': 'tom.brown@example.com', 'department': 'Finance' },
            { 'id': 6, 'name': 'Emily White', 'email': 'emily.white@example.com', 'department': 'HR' },
            { 'id': 7, 'name': 'David Wilson', 'email': 'david.wilson@example.com', 'department': 'Engineering' }
        ]

        getEmployeesByDepartment.mockReturnValue(mockEmp)
        let result = getEmployeesByDepartment("Engineering")
        expect(result).toEqual(mockEmp)
        expect(getEmployeesByDepartment).toHaveBeenCalledWith("Engineering")
    })


    test('should return updated employee form data', async () => {
        let mockEmp = [
            { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' },
            { 'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'department': 'Marketing' },
        ]

        updateEmployeesByEmail.mockReturnValue(mockEmp)
        let result = await updateEmployeesByEmail(1, "sandeep@gmail.com")
        expect(result).toEqual(mockEmp)
        expect(updateEmployeesByEmail).toHaveBeenCalledWith(1, "sandeep@gmail.com")
    })


    test('should delete employees by id', async () => {
        let mockEmp = [
            { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' },
            { 'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'department': 'Marketing' },
        ]

        deleteEmployeesByid.mockReturnValue(mockEmp)
        let result = await deleteEmployeesByid(1)
        expect(result).toEqual(mockEmp)
        expect(deleteEmployeesByid).toHaveBeenCalledWith(1)
    })

})