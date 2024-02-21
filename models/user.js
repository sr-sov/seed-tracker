import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._\s]+(?<![_.])$/, "Username invalid, it should contain 8-25 alphanumeric letters or whitespaces, and be unique!"] //Overall, this regex is designed to validate usernames that are a certain length, don't start or end with special characters, and don't contain consecutive special characters
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema)

export default User;