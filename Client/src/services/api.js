import axios from "axios";

const Url = 'https://server-oops.onrender.com';

export const addUser = async (data) => {
    try {
        await axios.post(`${Url}/add`, data);
    } catch (error) {
        console.log("Error in adding user: ", error);
    };
};

export const getUsers = async () => {
    try {
        let response = await axios.get(`${Url}/users`);
        return response.data;
    } catch(error) {
        console.log('Error in user error: ',error);
    };
}

export const SetConversation = async (data) => {
    try{
        await axios.post(`${Url}/conversation/add`, data);
    } catch(error) {
        console.log('Error while calling setConversation api : ', error);
    };
}

export const GetConversation = async (data) => {
    try{
        let response = await axios.post(`${Url}/conversation/get`, data);
        return response.data;
    } catch(error) {
        console.log('Error while calling getConversation api : ', error);
    };
}

export const newMessage = async (data) => {
    try{
        await axios.post(`${Url}/message/add`, data)
    } catch(error) {
        console.log("error in new message", error)
    }
}

export const getMessage = async (id) => {
    try{
        let response = await axios.get(`${Url}/message/get/${id}`);
        return response.data;
    }
    catch(error){
        console.log("error in get message", error)
    }
}

export const uploadfile = async (data) => {
    try {
        return axios.post(`${Url}/file/upload`, data);
    } catch (error) {
        console.log("error to upload file: ", error);
    }
}