const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    completed: {type: Boolean, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Task', taskSchema);