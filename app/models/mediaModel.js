const sequelize = require("sequelize");
const DataTypes = require('sequelize/lib/data-types');
const db = require('../../database/connect');
const message = require("./messageModel");

const media = db.define('media', {
    id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    message_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    media_id: {
        type: DataTypes.UUID,
        allowNull: false,
    }
},{tableName: "media"});

message.hasMany(media, {
    foreignKey: 'message_id'
});

media.belongsTo(message, {
    foreignKey: 'message_id'
});

module.exports = media;