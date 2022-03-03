import {Schema, model} from 'mongoose';

export const ROLES = ["users", "admin", "moderator"]

const roleSchema = new Schema(
    {
        name: String,
    },
    {
        versionKey: false,
    }
);

export default model ("Role", roleSchema);