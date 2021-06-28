var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema(
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

module.exports = mongoose.model('Task', TaskSchema);
