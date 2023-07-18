const sequelize = require("sequelize");
const DataTypes = require('sequelize/lib/data-types');
const db = require('../../database/connect');

const chat = db.define('chats', {
    id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    appointment_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
},{tableName: "chats"});


module.exports = chat;