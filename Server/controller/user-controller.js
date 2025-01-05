import User from "../model/user.js"

export const adduser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json({msg: 'user already exist' });
            return;
        }
        const newUser = new User(request.body);
        await newUser.save();
        return response.status(200).json(newUser);
    }
    catch(error) {
        console.log("Error in adding User : ", error);
        return response.status(500).json({ msg: error.message });
    }
}

export const getUsers = async (request, response) => {
    try{
        const users = await User.find({});
        return response.status(200).json(users);
    }
    catch(error) {
        console.log("error",error);
        return response.status(500).json({ msg: error.message })
    }
}