const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const e = require('express');
const PORT = 4000;
const Schema = mongoose.Schema;
// models definition goes here
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

const empModel = mongoose.model('Employees', Employees);
const routes = express.Router();
routes.route('/').get(function (req, res) {
    empModel.find(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

routes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    empModel.findById(id, function (err, emp) {
        console.log(emp);
        res.json(emp);
    });
});

routes.route('/add').post(function (req, res) {
    let emp = new empModel(req.body);
    emp.save().then(emp => {
        res.status(200).json({
            'status': 'Employee added successfully'
        });
    }).catch(e => {
        res.status(400).send('failed to add employee')
    })
})

routes.route('/update/:id').put(function(req, res){
    empModel.findById(req.params.id, function(err, emp){
        if(!data)
            res.status(404).send("employee not found")
        else
            emp.description = req.body.description;
            emp.responsible = req.body.responsible;
            emp.priority = req.body.priority;
            emp.completed = req.body.completed;
            emp.save().then(em => {
                res.json('Employee data updated');
            }).catch(e => {
                res.status(400).send("can't updat employee's data")
            })
    })
})

app.use('/emp', routes)
app.use(cors());
app.use(bodyparser.json())

mongoose.connect('mongodb://127.0.0.1:27017/testdb', { useNewUrlParser: true });
const connection = mongoose.connection;


connection.once('open', function () {
    console.log('Database connected')
})
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT)
})