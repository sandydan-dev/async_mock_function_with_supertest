const { getAllemployees, getEmployeesById, getEmployeesByDepartment, updateEmployeesByEmail,
    deleteEmployeesByid } = require('../controllers/employee.controller')

const request = require('supertest')
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
    server.listen(3002, done)
})

afterAll((done) => {
    server.close(done)
})



describe('test api endpoint', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should return 200 code ', async () => {
        let mockApi = [
            { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' },
            { 'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'department': 'Marketing' },
            { 'id': 3, 'name': 'Michael Johnson', 'email': 'michael.johnson@example.com', 'department': 'Sales' }
        ];

        getAllemployees.mockResolvedValue(mockApi)
        let result = await request(server).get('/api/employees')
        expect(result.status).toBe(200)
        expect(result.body).toEqual(mockApi)
    })

    //

    it('should return employees id, with 200 status code', async () => {
        let mockApi = { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' }

        getEmployeesById.mockResolvedValue(mockApi)
        let result = await request(server).get('/api/employees/id/1')
        expect(result.status).toBe(200)
        expect(result.body).toEqual(mockApi)
        expect(getEmployeesById).toHaveBeenCalledWith(1)

    })

    it('should return undefined', async () => {
        getEmployeesById.mockResolvedValue(null)
        let result = await request(server).get('/api/employees/id/123')
        expect(result.statusCode).toBe(404)
        expect(result.body.message).toEqual('employee id not found')
    })


    // department

    it('should return employees department', async () => {
        let mockApi = [
            { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' },
            { 'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'department': 'Marketing' },
            { 'id': 3, 'name': 'Michael Johnson', 'email': 'michael.johnson@example.com', 'department': 'Sales' }
        ];

        getEmployeesByDepartment.mockResolvedValue(mockApi)
        let result = await request(server).get('/api/employees/department/Engineering')
        expect(result.statusCode).toBe(200)
        expect(result.body).toEqual(mockApi)
        expect(getEmployeesByDepartment).toHaveBeenCalledWith("Engineering")
    })


    // updated data 
    it('should return updated value', async () => {
        let mockApi = { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' }



        updateEmployeesByEmail.mockResolvedValue(mockApi)
        let result = await request(server).post('/api/employees/email/1').send({ "email": "sandeep@gmail.com" })
        expect(result.status).toBe(200)
        expect(result.body).toEqual(mockApi)
        expect(updateEmployeesByEmail).toHaveBeenCalledWith(1, { "email": "sandeep@gmail.com" })
    })


    it('should delete employee by id', async () => {
        let mockApi = [
            { 'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'department': 'Engineering' },
            { 'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'department': 'Marketing' },
            { 'id': 3, 'name': 'Michael Johnson', 'email': 'michael.johnson@example.com', 'department': 'Sales' }
        ];

        deleteEmployeesByid.mockResolvedValue(mockApi)
        let result = await request(server).post('/api/employees/delete/1')
        expect(result.status).toBe(200)
        expect(result.body).toEqual(mockApi)
        expect(deleteEmployeesByid).toHaveBeenCalledWith(1)
    })

})
