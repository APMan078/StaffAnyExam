module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define('employee', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fullName:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Business;
};