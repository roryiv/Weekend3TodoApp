const router = require('express').Router();
const Task = require('../models/task.schema');

router.get('/', (req, res) => {
    Task.find({})
    .then((everyTask) => {
        res.send(everyTask);
    })
    .catch((error) => {
        console.log('error with Task.find: ',error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    Task.create(req.body)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

router.put('/', (req,res) => {
    Task.findByIdAndUpdate(req.body._id, req.body)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error updating task',error);
        res.sendStatus(500);
    });
});

router.delete('/', (req,res) => {
    Task.findByIdAndRemove(req.query._id)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error deleting task',error);
        res.sendStatus(500);
    });
});

module.exports = router;