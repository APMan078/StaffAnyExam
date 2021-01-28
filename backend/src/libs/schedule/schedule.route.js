const ScheduleController = require('./schedule.controller'); 

exports.scheduleRoutes = function (app) {
    app.post('/schedule', [  
        ScheduleController.insert
    ]);
    app.get('/schedule/:scheduleId', [ 
        ScheduleController.findScheduleById
    ]);
    app.put('/schedule/:scheduleId', [  
        ScheduleController.updateScheduleById
    ]);
    app.delete('/schedule/:scheduleId', [ 
        ScheduleController.deleteScheduleById
    ]);
    app.get('/schedule', [ 
        ScheduleController.findAllSchedule
    ]);
};