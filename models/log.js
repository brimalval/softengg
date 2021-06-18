var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LogSchema = new Schema(
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

module.exports = mongoose.model('Log', LogSchema);
