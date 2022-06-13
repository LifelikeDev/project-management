const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    name: { String },
    description: { String },
    status: {
        type: String,
        enum: ['Not started', 'In Progress', 'Completed']
    }
});

module.exports = mongoose.model('Project', ProjectSchema);