import Message from "../model/message.js"
import conversation from "../model/Conversation-model.js";

export const newMessage = async(request, response) => {
    try{
        const newmessage =  new Message(request.body);
        await newmessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId,{ message: request.body.text });
        return response.status(200).json("message be sent success");
    }
    catch(error) {
        return response.status(500).json(error);
    }
}

export const getMessage = async(request,response)=>{
    try{
        const messages = await Message.find({ conversationId: request.params.id });
        return response.status(200).json(messages);
    }
    catch(error) {
        return response.status(500).json(error);
    }
}