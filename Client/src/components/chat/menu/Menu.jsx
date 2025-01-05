import Header from "./Header"
import Search from "./Search"
import Convertions from "./Conversations"
import { useState } from "react"
import { Box } from "@mui/material"
const Menu = () => {

    const [text, setText] = useState('');
    return (
        <Box>
            <Header/>
            <Search setText={setText}/>
            <Convertions text={text}/>
        </Box>
    )
}

export default Menu