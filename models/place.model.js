const mongoose = require('mongoose');

const placeSchema= new mongoose.Schema({
    title: {type: String,required: true},
    description: {type: String,required: true},
    address: {type: String,required: true},
    image: {type: String}
})

module.exports = mongoose.model('Place', placeSchema) //places