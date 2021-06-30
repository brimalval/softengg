import { Schema, model } from 'mongoose';

export interface Project {
    name: String,
    lead: Schema.Types.ObjectId,
    date: Date,
    status: String,
    phase: String,
    priority: String,
    deadline: Date,
    engagement: Date,
}

const schema = new Schema<Project>(
    {
        name: {
            type: String,
            required: true,
            maxLength: 100,
        },
        lead: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ['Not Started', 'In Progress', 'Complete', 'On Hold', 'Overdue'],
        },
        phase: {
            type: String,
            required: true,
            enum: ['Negotiation', 'Schematic', 'Design Development', 'Contract Development', 'Construction', 'Post Construction', 'Bidding', 'Consultancy', 'Project Management'],
        },
        priority: {
            type: String,
            required: true,
            enum: ['Low', 'Medium', 'High'],
        },
        deadline: {
            type: Date,
            required: true,
        },
        engagement: {
            type: String,
            required: true,
            enum: ['Negotiation', 'Schematic', 'Design Development', 'Contract Development', 'Construction', 'Post Construction', 'Bidding', 'Consultancy', 'Project Management'],
        },
    }
);

export const ProjectModel = model<Project>('Project', schema);