import { Schema, model } from 'mongoose';

export interface Log {
    project: Schema.Types.ObjectId,
    action: String,
    date: Date,
    deliverables: String,
    remarks: String,
}

const schema = new Schema<Log>(
    {
        project: {
            type: Schema.Types.ObjectId,
            ref: 'Project',
            required: true,
        },
        action: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        deliverables: {
            type: String,
            required: true,
        },
        remarks: {
            type: String,
        },
    }
);

export const LogModel = model<Log>('Log', schema);