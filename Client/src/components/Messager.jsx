import { AppBar, Toolbar, styled } from '@mui/material';
import { useContext } from 'react';
import { AccontContext } from '../context/AccountProvider';
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

const Header = styled(AppBar)`
    height: 280px;
    background-color: #0a0a39;
    boxshadow: none;
`

const Message = () => {
    const { account } = useContext(AccontContext);
    return (
            account ? 
            
            <>
            <Header>
                <Toolbar>    
                </Toolbar>
            </Header>
            <ChatDialog/>
            </>    
        :
            <>
                <Header>
                    <Toolbar>    
                    </Toolbar>
                </Header>
                <LoginDialog/>
            </>
    )
}

export default  Message; 