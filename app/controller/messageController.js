const message = require("../models/messageModel");
const media = require("../models/mediaModel");
const { getResponse } = require("../helpers/helpers");

const createMessage = async (req, res) => {

    const {chat_id, media_id, text, sender_id}  = req.body;

    try {

        messageData = await message.create({ chat_id,sender_id,text });

        if(media_id !== null && media_id !== undefined) {
            const message_id = messageData.id
            mediaData = await media.create({ message_id, media_id })
        }

        return getResponse(res, 500, {message: "Created Successfully.", data: messageData});

    }catch(error) {

        return getResponse(res, 500, {message: "server error", data: error});
    }
}



module.exports = { createMessage };