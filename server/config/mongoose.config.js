const mongoose = require("mongoose");
mongoose.set('runValidators', true);

//This line requires a unique database name.
mongoose.connect("mongodb://localhost/authors_assignment", {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Mongoose connection successful!"))
    .catch(err => console.log("Mongoose did not connect...", err))