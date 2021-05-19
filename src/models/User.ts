import * as mongoose from 'mongoose'

interface UserInterface {
    email: string,
    name: string,
    surname: string,
    password: string,
    age?: number
}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: (value: string) => {
            if (!(value.includes('@') || value.includes('.'))) {
                throw new Error('That is not a valid email');
            }
        }
    },
    name: {
        type: String,
        required: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Za-z ]+$/)) {
                throw new Error('Name should only contain letters');
            }
        },
    },
    surname: {
        type: String,
        required: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Za-z ]+$/)) {
                throw new Error('Surname should only contain letters');
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate: (value: string) => {
            if (value.length < 8) {
                throw new Error('Password is too short!');
            }
        },
    },
    age: {
        type: Number,
        validate: (value: number) => {
            if (value < 0 || !value.isInteger()) {
                throw new Error('Age should be a natural number');
            }
        },
    }
});

const User = mongoose.model<UserInterface>('User', UserSchema);
export default User;