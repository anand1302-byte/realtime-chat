import { Dialog, Box } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { AccontContext } from '../../context/AccountProvider';
import { addUser } from '../../services/api';

const dialogstyle = {
    height: '50%',
    width: '17.15%'
};

const LoginDialog = () => {

    const { setAccount } = useContext(AccontContext);

    const onloginsucess = async (res) => {
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
        console.log(decoded);
    }

    const onloginerror = (res) => {
        console.log(res);
    }

    return (
        <Dialog 
            open={true}
            PaperProps={{ sx: dialogstyle }}
            hideBackdrop={true}
            >
            <p>Login Dialog</p>
            <Box>
                <GoogleLogin
                    onSuccess={onloginsucess}
                    onError={onloginerror}
                />
            </Box>
        </Dialog>
    )
}

export default LoginDialog;