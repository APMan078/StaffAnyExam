const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection'); 
const Schedule = require('../../models/schedule')(sequelize, Sequelize);

Schedule.sync();

exports.createSchedule = (data) => {
    return new Promise((resolve, reject) => {
        Schedule.create(data).then(schedule => {
            resolve(schedule);
        },err=>{
            reject({error:err});
        });
    });
};

exports.findScheduleById = (id) => {
    return new Promise((resolve, reject) => {
        Schedule.findByPk(id).then(schedule => {
            if(schedule == null){
                reject({status:404,message:"Schedule not found"});
            }
            resolve(schedule);
        },err=>{
            reject({error:err});
        })
    });
};
exports.updateScheduleById = (scheduleData,id) => {
    return new Promise((resolve, reject) => {
        Schedule.update(scheduleData, {
            where: {
              id: id
            }
          }).then(schedule => {
            Schedule.findByPk(id).then(schedule => {
                resolve(schedule);
            },err1=>{
                reject({error:err1});
            })
        },err=>{
            reject({error:err});
        });
    });
};
exports.deleteScheduleById = (id) => {
    return new Promise((resolve, reject) => {
        Schedule.destroy({
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
exports.findAllSchedule = () => {
    return new Promise((resolve, reject) => {
        Schedule.findAll({
            attributes: ['id','employeeId','shiftDate','startTimeShift','endTimeShift']
        }).then(schedule => {
            resolve(schedule);
        },err=>{
            reject({error:err});
        })
    });
}; 