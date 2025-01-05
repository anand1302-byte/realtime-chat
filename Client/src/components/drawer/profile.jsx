import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import { AccontContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`
const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: '25px 0'
})

const BoxContainer = styled(Box)`
    background: transparent;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    & :first-child{
        font-size: 13px;
        color: #5DC1F8;
        font-weight: 200;
    }
    & :last-child{
        margin: 14px 0;
        color: #EAF3F8;
    }
`


const Profile = () => {

    const { account } = useContext(AccontContext);

    return(
        <>
            <ImageContainer>
                <Image src={account.picture} alt="dp"/>
            </ImageContainer>
            <BoxContainer>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </BoxContainer>
            <BoxContainer>
                <Typography>Discription</Typography>
                <Typography>Orions Tech Elite</Typography>
            </BoxContainer>
        </>
    )
}

export default Profile