const Entry = require('../models/EntryModel');

const EntryController = {

    createEntry(req, res) {
        var newEntry = Entry({
            title: req.body.title,
            //date?
            body: req.body.body,
        })

        newEntry.save(function (err, data) {
            if (err) throw err;
            res.send(data);
        })
    },

    getAllEntrys(req, res) {
        Entry.find({}, function (err, allEntrys) {
            if (err) throw err;
            res.send(allEntrys)
        })
    },

    updateEntry(req, res) {
        Entry.findByIdAndUpdate(req.params.entry, { title: req.body.title, body: req.body.body /*date?*/ }, function (err, data) {
            if (err) throw err;
            res.send(data);
        })
    },

    deleteEntry(req, res) {
        Entry.findByIdAndRemove(req.params.entry, function (err, data) {
            if (err) throw err;
            res.send(data);
        })
    }

}

module.exports = EntryController;