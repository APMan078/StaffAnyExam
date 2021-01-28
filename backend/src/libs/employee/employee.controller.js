const EmployeeModel = require('./employee.model');
const fs = require('fs');

exports.insert = (req, res) => { 
    EmployeeModel.createEmployee(req.body).then((result) => {
        res.status(201).send(result);
    }, err => {
        res.status(406).send(err);
    });
};
exports.findEmployeeById = (req, res) => {
    EmployeeModel.findEmployeeById(req.params.employeeId)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(err.status).send(err.message);
        });
};
exports.updateEmployeeById = (req, res) => {
    if (req != undefined) { 
        let id = req.params.employeeId
        EmployeeModel.findEmployeeById(id)
            .then((result) => {
                if (result.image != null) {
                    fs.unlinkSync(result.image);
                }
                EmployeeModel.updateEmployeeById(req.body, id)
                    .then((r) => {
                        res.status(200).send(r);
                    }, err1 => {
                        res.status(406).send(err1);
                    });
            }, err => {
                res.status(406).send(err);
            });
    } else {

        EmployeeModel.updateEmployeeById(req.body, req.params.employeeId)
            .then((result) => {
                res.status(200).send(result);
            }, err => {
                res.status(406).send(err);
            });
    }
};
exports.deleteEmployeeById = (req, res) => {
    let id = req.params.businessId;
    EmployeeModel.findEmployeeById(id)
        .then((result) => {
            if (result.image != null) {
                fs.unlinkSync(result.image);
            }
            EmployeeModel.deleteEmployeeById(id)
                .then((r) => {
                    res.status(200).send(r);
                }, err1 => {
                    res.status(406).send(err1);
                });
        }, err => {
            res.status(406).send(err);
        });
};
exports.findAllEmployee = (req, res) => {
    EmployeeModel.findAllEmployee()
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });
}; 