const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/PizzaApplication' , {useNewUrlParser: true}).then(
    () => console.log("Connected to Database")).catch(
    (err) => console.log(err)
)

module.exports = mongoose