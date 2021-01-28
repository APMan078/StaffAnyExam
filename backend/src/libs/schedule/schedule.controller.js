const ScheduleModel = require('./schedule.model');
const fs = require('fs');

exports.insert = (req, res) => { 
    ScheduleModel.createSchedule(req.body).then((result) => {
        res.status(201).send(result);
    }, err => {
        res.status(406).send(err);
    });
};
exports.findScheduleById = (req, res) => {
    ScheduleModel.findScheduleById(req.params.scheduleId)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(err.status).send(err.message);
        });
};
exports.updateScheduleById = (req, res) => {
    if (req != undefined) { 
        let id = req.params.scheduleId
        ScheduleModel.findScheduleById(id)
            .then((result) => {
                if (result.image != null) {
                    fs.unlinkSync(result.image);
                }
                ScheduleModel.updateScheduleById(req.body, id)
                    .then((r) => {
                        res.status(200).send(r);
                    }, err1 => {
                        res.status(406).send(err1);
                    });
            }, err => {
                res.status(406).send(err);
            });
    } else {

        ScheduleModel.updateScheduleById(req.body, req.params.scheduleId)
            .then((result) => {
                res.status(200).send(result);
            }, err => {
                res.status(406).send(err);
            });
    }
};
exports.deleteScheduleById = (req, res) => {
    let id = req.params.businessId;
    ScheduleModel.findScheduleById(id)
        .then((result) => {
            if (result.image != null) {
                fs.unlinkSync(result.image);
            }
            ScheduleModel.deleteScheduleById(id)
                .then((r) => {
                    res.status(200).send(r);
                }, err1 => {
                    res.status(406).send(err1);
                });
        }, err => {
            res.status(406).send(err);
        });
};
exports.findAllSchedule = (req, res) => {
    ScheduleModel.findAllSchedule()
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });
}; 