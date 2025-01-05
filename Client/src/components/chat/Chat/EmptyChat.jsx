import { Box, Typography, styled } from "@mui/material";

const Components = styled(Box)`
    background: #FFFFFF ;
    padding: 30px 0;
    text-align: center;
    height: 100%
`;

const Container = styled(Box)`
    padding: 0 200px;
`
const Image = styled('img')({
    width: 200,
    marginTop: 100
})

const TITLE = styled(Typography)`
    font-size: 30px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;

`
const Subtitle = styled(Typography)`
    font-size: 14px;
    color: 667781;
    font-weight: 400;
    font-family: inherit
`

const EmptyChat = () => {
    return (
        <Components>
            <Container>
                <Image src="./O.png" alt="image" />
                <TITLE>OTE Chat Web App</TITLE>
                <Subtitle>Now Send and receive message anytime</Subtitle>
                <Subtitle>Use OTE Chat web App on to only sign in with google at any account</Subtitle>
            </Container>
        </Components>
    )
}

export default EmptyChat;