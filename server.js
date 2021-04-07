const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.get('/', (req,res) => {
  res.send('Hello to Memories API');
});

const DATABASE_ACCESS = 'mongodb+srv://pathikdas45:Pathikdas!3@cluster0.2nisg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 4000;

mongoose.connect(DATABASE_ACCESS, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);