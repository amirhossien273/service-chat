const chatModel = require("../models/chatModel");
const { getResponse, validator } = require("../helpers/helpers");
const chat = require("../models/chatModel");
const message = require("../models/messageModel");
const media = require("../models/mediaModel");

const showListChat = async (req, res) => {

    return getResponse(res, 200, {data: "hi node..."});
};

const showChat = async (req, res) => {

  

    const chat1  = await chat.findOne({ where: { appointment_id: req.params.id },include: [{model: message, include: [{model: media}]}]});


    return getResponse(res, 200, {chat1});
};

const createChat = async (req, res) => {

    const {appointment_id} = req.body;

    try {

        let chatData = await chat.findOne({ where: { appointment_id } });
        
        if(chatData === null) {
            chatData = await chat.create({ appointment_id });
        }

        return getResponse(res, 500, {message: "Created Successfully.", data: chatData});

    }catch(error) {

        return getResponse(res, 500, {message: "server error", data: error});
     }
}



module.exports = { createChat, showListChat, showChat };