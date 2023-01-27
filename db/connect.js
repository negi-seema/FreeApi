const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
const Dataconnect = (uri) =>{
    console.log('connection successful')
    return mongoose.connect(uri)
}

module.exports = Dataconnect