const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    }
});

const student = new mongoose.model('Student', schema);

module.exports = student;