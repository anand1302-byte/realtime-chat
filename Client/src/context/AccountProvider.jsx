import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccontContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([])
    const [newmessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000')
    }, [])
    return ( 
        <AccontContext.Provider  value={{ account, setAccount, person, setPerson, socket, activeUsers, setActiveUsers, newmessageFlag, setNewMessageFlag}}>
            {children}
        </AccontContext.Provider>
    )
}

export default AccountProvider;
