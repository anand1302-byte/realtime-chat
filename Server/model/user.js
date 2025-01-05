import mongoose from "mongoose";

const userschema = mongoose.Schema({
    iss: { type: String } ,
    azp: { type: String } ,
    aud: { type: String } ,
    sub: { type: String, required: true } ,
    email: { type: String } ,
    email_verified: { type: String } ,
    nbf: { type: Number } ,
    name: { type: String, required: true } ,
    picture: { type: String, required: true } ,
    given_name: { type: String } ,
    family_name: { type: String } ,
    iat: { type: Number } ,
    exp: { type: Number } ,
    jti: { type: String } ,
});

const User = mongoose.model( 'user', userschema );

export default User;

// iss, azp, aud, sub, email, email_verified, nbf, name, picture, given_name, family_name, iat, exp, jti //