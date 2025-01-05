import { Dialog, styled, Box } from "@mui/material"
import Menu from "./menu/Menu";
import EmptyChat from "./Chat/EmptyChat";
import Chatbox from "./Chat/chatbox";

import { useContext } from "react";
import { AccontContext } from "../../context/AccountProvider";


const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)`
    min-width: 450px;
`

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    background: #FAFAFA;
    border-left: 1px solid rgb(200, 228, 248);
`

const dialogstyle = {
    position: 'relative',
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '96%',
    boxShadow: 'none',
    overflow: 'hidden',
    backgroundColor: 'none',
    borderRadius: 4
};



const ChatDialog = () => {

    const { person } = useContext(AccontContext);

    return (
        <Dialog 
        open={true}
        PaperProps={{ sx: dialogstyle }}
        hideBackdrop={true}
        maxWidth={'md'}
        >
        <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
                {/* <EmptyChat/> */}
                {Object.keys(person).length ? <Chatbox /> : <EmptyChat />}
            </RightComponent>
        </Component>
            
        </Dialog>
    )
}

export default ChatDialog