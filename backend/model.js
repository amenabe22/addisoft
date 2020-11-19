

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Employees = new Schema({
    description: {
        type: String
    },
    responsible: {
        type: String
    },
    priority: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

export default mongoose.model('Employees', Employees)
// module.exports = 