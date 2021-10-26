const express = require('express');
const ToDoController = require('../../controllers/toDo');
const router = express.Router();

router.post('/add',ToDoController.add);
router.put('/update/:id',ToDoController.update);
router.delete('/delete/:id',ToDoController.delete);
router.get('/show/:id',ToDoController.show);//Get Info
router.get('/index',ToDoController.index);//Get All

module.exports = router;
