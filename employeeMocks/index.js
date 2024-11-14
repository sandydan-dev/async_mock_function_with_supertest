const express = require('express')
const app = express()
const port = 3000

const { getAllemployees, getEmployeesById, getEmployeesByDepartment,
    updateEmployeesByEmail, deleteEmployeesByid
} = require('./controllers/employee.controller')
app.use(express.json())



app.get('/api/employees', async (req, res) => {
    try {
        let response = await getAllemployees()
        if (response) {
            res.status(200).json(response)
        } else {
            res.status(404).json({ message: 'employee data not found' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
})


app.get('/api/employees/id/:id', async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        let response = await getEmployeesById(id)
        if (response) {
            res.status(200).json(response)
        } else {
            res.status(404).json({ message: 'employee id not found' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Internale server error', error })
    }
})


app.get('/api/employees/department/:department', async (req, res) => {
    try {
        let department = req.params.department
        let result = await getEmployeesByDepartment(department)
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: 'employee department not found' })
        }

    } catch (error) {
        res.status(500).json({ message: 'Internale server error', error })

    }
})

// update email
app.post('/api/employees/email/:id', async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        let email = req.body
        let response = await updateEmployeesByEmail(id, email)
        if (response) {
            res.status(200).json(response)
        } else {
            res.status(404).json({ message: 'employee email not found' })
        }

    } catch (error) {
        res.status(500).json({ message: 'Internale server error', error })

    }
})


app.post('/api/employees/delete/:id', async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        let response = await deleteEmployeesByid(id)
        if (response) {
            res.status(200).json(response)
        } else {
            res.status(404).json({ message: 'employee id not found' })
        }

    } catch (error) {
        res.status(500).json({ message: 'Internale server error', error })

    }
})


module.exports = { app, port }