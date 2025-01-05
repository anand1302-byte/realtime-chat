import { Box, Drawer, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./profile";

const Header = styled(Box)`
    background: #070852;
    height: 100px;
    color: #FFFFFF;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 9px 10px;
        font-weight: 600;
    }
`
const Text = styled(Typography)`
    font-size: 16px;
`

const Components = styled(Box)`
    background: #0A0A0A;
    height: 85%;
`

const drawerStyle = {
    left: 32,
    top: 17,
    height: "95%",
    width: "30%",
    boxShadow: 'none'
}

const Infodrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle}}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Header>
            <Components>
                <Profile/>
            </Components>    

        </Drawer>
    )
}

export  default Infodrawer;