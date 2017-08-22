const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const entryController = require('./controllers/EntryController')

const PORT = 3000;

mongoose.connect('mongodb://user:1234@ds155587.mlab.com:55587/journal-williamhe');
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', entryController.getAllEntrys);

app.post('/post', entryController.createEntry);

app.patch('/:entry', entryController.updateEntry);

app.delete('/:entry', entryController.deleteEntry);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));