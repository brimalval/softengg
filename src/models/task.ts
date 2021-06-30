import { Schema, model } from 'mongoose';

export interface Task {
    project: Schema.Types.ObjectId,
    task: String,
    description?: String,
    comments?: String,
    date: Date,
    status: String,
    is_active: Boolean,
    parent?: Schema.Types.ObjectId,
}

const schema = new Schema<Task>(
    {
        project: {
            type: Schema.Types.ObjectId,
            ref: 'Project',
            required: true,
        },
        task: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        comments: {
            type: String,
        },
        date: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ['Backlog', 'This Week', 'Today', 'Current', 'Follow-up', 'Delegated', 'Done'],
        },
        is_active: {
            type: Boolean,
            required: true,
        },
        parent: {
            type: Schema.Types.ObjectId,
            ref: 'Task',
        },
    }
);

export const TaskModel = model<Task>('Task', schema);