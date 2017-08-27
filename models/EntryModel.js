const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var entrySchema = new Schema ({
    title: String,
    date: { type: Date, default: new Date() },
    body: String,
})

var entry = mongoose.model('entry', entrySchema);

module.exports = entry;

