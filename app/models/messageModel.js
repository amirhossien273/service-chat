const sequelize = require("sequelize");
const DataTypes = require('sequelize/lib/data-types');
const db = require('../../database/connect');
const chat = require("./chatModel");

const message = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    chat_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    sender_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
},{tableName: "messages"});

chat.hasMany(message, {
    foreignKey: 'chat_id'
});

message.belongsTo(chat, {
    foreignKey: 'chat_id'
});

module.exports = message;