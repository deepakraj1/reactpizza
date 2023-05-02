const express = require('express');
const cors = require('cors');
const app = express()

const mongoose = require('./database/mongoose');
const Items = require('./database/models/items');
const OrderPizza = require('./database/models/pizza');
const CartPizza = require('./database/models/cart');

app.use(express.json());
app.use(cors());

app.get('/items', (req,res)=>{
    Items.find({}).then(lists => res.send(lists)).catch((err) => console.log(err))
});

app.get('/pizza', (req,res)=>{
    OrderPizza.find({}).then(data => res.send(data)).catch((err) => console.log(err))
});

app.get('/cart', (req,res)=>{
    CartPizza.find({}).then(data => res.send(data)).catch((err) => console.log(err))
});

app.post('/cart', (req,res)=>{
    CartPizza.create(req.body,(err,result)=>{
        if(err) console.log("insert error : "+err);
        else res.send(result);
    })
});

app.put('/cart/:id', (req,res)=>{
    CartPizza.findOneAndUpdate({ $or: [ { _id: req.params.id }, { ingredients: req.params.id } ] }, { $set: req.body }, (err, result) => {
        if(err) console.log("update error : "+err);
        else res.send(result);
    });
});

app.delete('/cart/remove/:id', (req, res) => {
    CartPizza.deleteOne({ _id: req.params.id }, (err, result) => {
      if (err) console.log("delete error : " + err);
      else res.send(result);
    });
  });

app.listen(3000, ()=> console.log('Listening at port 3000'))