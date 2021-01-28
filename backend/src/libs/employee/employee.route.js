const EmployeeController = require('./employee.controller'); 

exports.employeeRoutes = function (app) {
    app.post('/employee', [  
        EmployeeController.insert
    ]);
    app.get('/employee/:employeeId', [ 
        EmployeeController.findEmployeeById
    ]);
    app.put('/employee/:employeeId', [  
        EmployeeController.updateEmployeeById
    ]);
    app.delete('/employee/:employeeId', [ 
        EmployeeController.deleteEmployeeById
    ]);
    app.get('/employee', [ 
        EmployeeController.findAllEmployee
    ]);
};