const mongoose = require('mongoose');

const connectDatbase = () => {
    console.log("Wait connecting to the database");

    mongoose.connect("mongodb+srv://antnicassio:<password>@cluster0.ifzw2l4.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
        ).then( () => console.log("MongoDB Atlas connected") ).catch( (error) => console.log(error) );
};

module.exports = connectDatbase;