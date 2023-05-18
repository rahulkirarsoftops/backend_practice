const mongooes = require("mongoose");
const uri =
  "mongodb+srv://rahulkirar:SbFMkyzkYbT6b0S6@cluster0.zefo6ij.mongodb.net/krince?retryWrites=true&w=majority";

mongooes
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the mongodb"))
  .catch((error) => console.log("error",error));
