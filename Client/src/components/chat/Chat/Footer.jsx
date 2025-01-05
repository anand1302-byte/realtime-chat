import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { uploadfile } from "../../../services/api";
import Picker  from "emoji-picker-react"

const Container = styled(Box)`
    height: 40px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;

    }

`;

const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 10px;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 15px;
    height: 20px;
    padding-left: 15px;
    font-size: 14px;
`;

const EmojiPickerContainer = styled(Box)`
    position: absolute;
    bottom: 50px;
    left: 10px;
    z-index: 1000;
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
    const [showPicker, setShowPicker] = useState(false);
    useEffect(() => {
        const getImage = async() => {
            if(file) {
                const data = new FormData();
                data.append("name",file.name);
                data.append("file", file);
                let response = await uploadfile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    const onEmojiClick = (event, emojiObject) => {
        setValue(prevValue => prevValue + emojiObject.emoji);
        setShowPicker(false);
    };

    return (
        <Container>
            <EmojiEmotionsOutlined onClick={() => setShowPicker(val => !val)} />
            {showPicker && (
                <EmojiPickerContainer>
                    <Picker onEmojiClick={onEmojiClick} />
                </EmojiPickerContainer>
            )}
            <label htmlFor="fileInput">
                <AttachFile />
            </label>
            <input 
                type="file"
                id="fileInput"
                style={{display: 'none'}}
                onChange={(e) => onFileChange(e)}
            />
            <Search>
                <InputField placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <Mic />
        </Container>
    );
};

export default Footer;