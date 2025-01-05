import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import Messages from "./message";
import { useContext } from "react";
import { AccontContext } from "../../../context/AccountProvider";
import { useState, useEffect, useRef } from "react";
import { getMessage, newMessage } from "../../../services/api";

const Wrapper = styled(Box)`
    background-image: url(${'https://e1.pxfuel.com/desktop-wallpaper/562/924/desktop-wallpaper-chat-themes-for-whatsapp-wechat-and-telegram-app-whatsapp-chat.jpg'});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;
const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`
const Container = styled(Box)`
    padding: 3px 10px;
`

const Message = ({ person, conversation }) => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [file, setFile] = useState();
    const [image, setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    const { account, socket, newmessageFlag, setNewMessageFlag } = useContext(AccontContext)

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        const getMessageDetalis = async () =>{
            let data =  await getMessage(conversation._id);
            console.log(data);
            setMessages(data);
        }
        conversation._id && getMessageDetalis();
    },[person._id, conversation._id, newmessageFlag]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' })
    },[messages])

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessages(prev => [...prev, incomingMessage])
    }, [incomingMessage, conversation])

    const sendText = async(e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {};
            if(!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            }
            else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }

            socket.current.emit('sendMessage', message)
            
            await newMessage(message);
            setValue('');
            setFile('');
            setImage('');
            setNewMessageFlag(prev => !prev)
        }
    }
    return (
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message => (
                        <Container>
                            <Messages message={message} />
                        </Container>
                    ))
                }
            </Component>
            <Footer 
                sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    )
}

export default Message;