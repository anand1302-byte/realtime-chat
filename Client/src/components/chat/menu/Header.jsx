import { Box,styled } from "@mui/material";
import { useContext, useState } from "react"
import { AccontContext } from "../../../context/AccountProvider";
import { Chat as MessageIcon } from  '@mui/icons-material';
import HeaderMenu from "./Headermenu";
import Infodrawer from "../../drawer/Infodrawer";

const Component = styled(Box)`
    height:44px;
    background: #090C84;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
        color: white;
    }
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: "50%"
})

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { account } = useContext(AccontContext);
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
                <Wrapper>
                    <MessageIcon/>
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <Infodrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}

export default Header