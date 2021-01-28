module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define('schedule', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        employeeId:{
            type: DataTypes.STRING,
            allowNull: false
        },
        shiftDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        startTimeShift: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        endTimeShift: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
    });
    return Business;
};