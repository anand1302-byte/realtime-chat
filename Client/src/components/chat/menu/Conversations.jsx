import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../services/api.js";
import { Box, styled, Divider } from "@mui/material";
import Conversation from './conversation';
import { AccontContext } from "../../../context/AccountProvider.jsx";

const Components = styled(Box)`
    height: 81vh;
    overflow: overlay;
`
const StyledDivider = styled(Divider)`
    background-color: #EFF0FB;
    opacity: .6;

`

const Convertions = ({ text }) => {
    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccontContext)
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        };
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Components>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={ user }/>
                        <StyledDivider />
                    </>
                ))
            }
        </Components>
    )
}

export default Convertions;