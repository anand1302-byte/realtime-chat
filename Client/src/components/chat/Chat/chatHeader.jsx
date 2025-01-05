import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
import { AccontContext } from '../../../context/AccountProvider';

const Header = styled(Box)`
    height:44px;
    background: #090C84;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`
const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: "cover",
    borderRadius: "50%",
});

const Name = styled(Typography)`
    margin-left: 15px;
    color: rgb(240, 241, 248);
`;

const Status = styled(Typography)`
    margin-left: 15px;
    font-size: 12px;
    color: rgb(216, 220, 246);
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: white;
    }

`

const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AccontContext);

    return (
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{ activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline' }</Status>
            </Box>
            <RightContainer>
                <Search/>
                <MoreVert/>
            </RightContainer>
        </Header>
    )
}

export  default ChatHeader;