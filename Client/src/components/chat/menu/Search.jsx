import { Search as SearchIcon } from '@mui/icons-material';
import { Box, InputBase, styled } from "@mui/material";

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
`;
const Wrapper = styled(Box)`
    background-color: #EFF1FF;
    positon: relative;
    margin: 0 8px;
    width: 100%; 
`;
const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 7px 10px;
`;
const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    height: 10px;
    padding-left: 65px;
    font-size: 14px;
`;
const Search = ({ setText }) => {

    return(
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize='small' />
                </Icon>
                <InputField
                    placeholder='Search'
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}

export default Search;