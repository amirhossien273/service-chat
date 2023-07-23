const message = require("../models/messageModel");
const media = require("../models/mediaModel");
const chat = require("../models/chatModel");
const { getResponse } = require("../helpers/helpers");

const createMessage = async (req, res) => {

    const { media_id, text, sender_id, appointment_id}  = req.body;

    try {

        let chatData = await chat.findOne({ where: { appointment_id } });
        const chat_id = chatData.id;
        messageData = await message.create({ chat_id,sender_id,text });

        if(media_id !== null && media_id !== undefined) {
            const message_id = messageData.id
            mediaData = await media.create({ message_id, media_id })
        }

        return getResponse(res, 200, {message: "Created Successfully.", data: messageData});

    }catch(error) {

        return getResponse(res, 500, {message: "server error", data: error});
    }
}



module.exports = { createMessage };