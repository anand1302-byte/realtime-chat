import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";


const HeaderMenu = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu 
                id="basic-menu"
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem onClick={() => {handleClose(); setOpenDrawer(true); }}>Profile</MenuItem>

            </Menu>
        </>
    )
}

export default HeaderMenu;