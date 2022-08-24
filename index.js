const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.Promise = global.Promise;                                                                  
mongoose.connect(`mongodb+srv://${process.env.User}:${process.env.Pass}@cluster0.oftfxs6.mongodb.net/${process.env.DBname}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Conectado a la base de datos.");

    app.listen(process.env.PORT || 3000, function () {
        console.log("Corriendo en el puerto 3000!")
    })

}).catch(error => console.log(error));