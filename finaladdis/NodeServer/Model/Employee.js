const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Employee = new Schema(
    {
        name: { type: String },
        dob: { type: String },
        gender: { type: String },
        salary: { type: Number }
    },
    {
        collection: 'employees'
    }
);

module.exports = mongoose.model('Employee', Employee);
