const express = require('express')
const app = express();
const port = process.env.PORT || 7007;
const getBook = require('./controllers/getBook');
app.use(express.json());

app.get('/', getBook);


app.listen(port, console.log(port));

