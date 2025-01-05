import ChatHeader from "./chatHeader";
import Message from "./Messages";
import { Box } from "@mui/material";
import { AccontContext } from "../../../context/AccountProvider";
import { GetConversation } from "../../../services/api";
import { useContext, useEffect, useState } from "react";

const Chatbox = () =>{

    const { person, account } = useContext(AccontContext);
    const [conversation, setConversation ] = useState({});
    
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await GetConversation({ senderId: account.sub, receiverId: person.sub })
            setConversation(data);
        }
        getConversationDetails()
    },[person.sub])

    return(
        <Box>
            <ChatHeader person={person} />
            <Message person={person} conversation={conversation} />
        </Box>
    )
}

export default Chatbox; 