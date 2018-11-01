const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

//listen users
router.get('/', async (req, res) => {
   const users = await User.find();
   res.json(users);
});

//listen one users
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
 });

//create users
router.post('/', async (req, res) => {
    const { name, email, movil, password } =  req.body; 
    const newUser = new User({ name, email, movil, password });
    await newUser.save();
    res.json({status: 'New users created..'});
 });

 //update users
 router.put('/:id', async (req, res) => {
    const { name, email, movil, password } =  req.body; 
    const updateUser = { name, email, movil, password };
    await User.findByIdAndUpdate(req.c.id, updateUser);
    res.json({status: 'users update..'});
 });

 router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'users remove..'});
 });

module.exports = router;