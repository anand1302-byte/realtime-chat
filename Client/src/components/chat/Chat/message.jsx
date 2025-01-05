import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { formateDate, downloadMedia } from "../../../utils/common-utils";
import { AccontContext } from "../../../context/AccountProvider";
import GetAppIcon from "@mui/icons-material/GetApp";

const Own = styled(Box)`
    background: #c3cdfd;
    max-width: 60%;
    margin-left: auto;
    padding: 2px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`
const Wrapper = styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    padding: 2px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;`

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 10px 0 5px;
`
const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 7px;
    word-break: keep-all;
    margin-top: auto;
`

const Messages = ({ message }) => {

    const { account } = useContext(AccontContext);

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Own>
                :
                    <Wrapper>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Wrapper>
            }
        </>
    );
}

const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ?
                    <Box style={{display: 'flex'}}>
                        <img src="./pdf.png" alt="pdf" style={{ width: 80 }} />
                        <Typography>{message.text.split('/').pop()}</Typography>
                    </Box>
                :
                <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
            }
            <Time style={{ position: 'absolute', bottom: 0, right: 0,  }}>
                <GetAppIcon onClick={(e) => downloadMedia(e, message.text)} style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%', cursor: 'pointer'}}
                fontSize="small" />
                {formateDate(message.createdAt)}
            </Time>
        </Box>
    )
}

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formateDate(message.createdAt)}</Time>
        </>
    )
}

export default Messages;