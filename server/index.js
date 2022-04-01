
// MERN APP


const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.models');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mern-stack')

app.get('/hello',(req,res) => {
    res.send('Hello World')
})

app.post('/api/register', async (req,res) => {
    console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json({status: 'ok'})
    }
    catch(err){
        console.log(err)
        res.json({status: 'error', error: 'Dublicate Email'})
    }
})

app.post('/api/login', async (req,res) => {
    console.log(req.body)
    const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
     
        if(user){
            const token = jwt.sign({
                name:user.name,
                email: user.email
            },'secrete123')

            return res.json({ status: 'ok', user: token})
        }
        else{
            return res.json({ status: 'error', user: false})
        }
})


app.listen(1337,() => {
    console.log('Server is running on port 1337')
})