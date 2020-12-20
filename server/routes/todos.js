const express = require('express')
const router = express.Router();

const pool = require("../db");

router.post('/', async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("insert into todo(description) values($1) returning *", [description]);
        res.json(newTodo.rows[0]);
    } catch( ex ) {
        console.error( ex.message);
    }
})

router.get('/', async (req, res) => {
    try {
        const allTodos = await pool.query('select * from todo');
        res.json(allTodos.rows);
    } catch( ex) {
        console.error( ex.message);
    }
})

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await  pool.query('select * from todo where todo_id=$1', [id]);
        res.json( todo.rows[0]);
    } catch( ex) {
        console.error( err.message);
    }
})

router.put('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const { description } = req.body;
        const updateTool = await pool.query('update todo set description = $1 where todo_id=$2', [description, id]);
        res.json("Todo was updated");
    } catch( ex) {
        console.error( err.message);
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const deleteTodo = await pool.query('delete from todo where todo_id=$1', [id]);
        res.json("Todo was deleted")
    } catch( ex) {
        console.error( err.message);
    }
})


module.exports = router;