import { Schema, model } from 'mongoose';

export interface User {
    first_name: String,
    last_name: String,
    email: String,
    password: String,
}

const schema = new Schema<User>(
    {
        first_name: {
            type: String,
            required: true,
            maxLength: 100,
        },
        last_name: {
            type: String,
            required: true,
            maxLength: 100,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Enter a valid email address'],
        },
        password: {
            type: String,
            required: true,
            maxLength: 100,
        },
    }
);

export const UserModel = model<User>('User', schema);