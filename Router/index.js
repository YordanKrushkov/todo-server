const express= require('express');
const router=express.Router();
const Todo=require('../Schema/todo')

router.post('/create', async(req,res)=>{
    const todo = new Todo(req.body);
    const todoes = await todo.save();
    res.status(200).send(todoes)
});
router.get('/get', async(req,res)=>{
    const todo = await Todo.find();
    // verifyUser(req, res);
    res.status(200).send(todo)
});
router.post('/delete', async(req,res)=>{
    const todo = await Todo.deleteOne({_id:req.body.id});
    res.status(200).send('Success')
});

module.exports=router