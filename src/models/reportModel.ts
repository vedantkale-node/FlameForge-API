import { Schema, model } from 'mongoose';
import type { IReport } from '../interfaces/reportInterface.js';

const reportSchema = new Schema<IReport>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Report = model('Report', reportSchema);

export default Report;
