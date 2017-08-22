const Entry = require('../models/EntryModel');

const EntryController = {

    createEntry(req, res) {
        var newEntry = Entry({
            title: req.body.title,
            //date?
            body: req.body.body,
        })

        newEntry.save(function (err) {
            if (err) throw err;
            res.send('Success');
        })
    },

    getAllEntrys(req, res) {
        Entry.find({}, function (err, allEntrys) {
            if (err) throw err;
            res.send(allEntrys)
        })
    },

    updateEntry(req, res) {
        Entry.findByIdAndUpdate(req.params.entry, { title: req.body.title, body: req.body.body /*date?*/ }, function (err) {
            if (err) throw err;
            res.send('Success');
        })
    },

    deleteEntry(req, res) {
        Entry.findByIdAndRemove(req.params.entry, function (err) {
            if (err) throw err;
            res.send('Success');
        })
    }

}

module.exports = EntryController;