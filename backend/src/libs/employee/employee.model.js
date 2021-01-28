const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection'); 
const employee = require('../../models/employee');
const Employee = require('../../models/employee')(sequelize, Sequelize);

Employee.sync();

exports.createEmployee = (data) => {
    return new Promise((resolve, reject) => {
        Employee.create(data).then(employee => {
            resolve(employee);
        },err=>{
            reject({error:err});
        });
    });
};

exports.findEmployeeById = (id) => {
    return new Promise((resolve, reject) => {
        Employee.findByPk(id).then(employee => {
            if(employee == null){
                reject({status:404,message:"Employee not found"});
            }
            resolve(employee);
        },err=>{
            reject({error:err});
        })
    });
};
exports.updateEmployeeById = (employeeData,id) => {
    return new Promise((resolve, reject) => {
        Employee.update(employeeData, {
            where: {
              id: id
            }
          }).then(employee => {
            Employee.findByPk(id).then(employee => {
                resolve(employee);
            },err1=>{
                reject({error:err1});
            })
        },err=>{
            reject({error:err});
        });
    });
};
exports.deleteEmployeeById = (id) => {
    return new Promise((resolve, reject) => {
        Employee.destroy({
            where: {
              id: id
            }
          }).then(() => {
            resolve({message:"Delete Successfully"});
        },err=>{
            reject({error:err});
        });
    });
}; 
exports.findAllEmployee = () => {
    return new Promise((resolve, reject) => {
        Employee.findAll({
            attributes: ['id','fullName']
        }).then(employee => {
            resolve(employee);
        },err=>{
            reject({error:err});
        })
    });
}; 