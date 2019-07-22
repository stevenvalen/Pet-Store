const Pet = require("./models");

module.exports = {
    home: (req, res) => {
        Pet.find({}).sort({ type: 1 })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: (req, res) => {
        Pet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    getone: (req, res) => {
        let id = req.params.id;
        Pet.findById(id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    delete: (req, res) => {
        Pet.findByIdAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: (req, res) => {
        // or req.body if updating everything
        Pet.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true })
            .then(data => {
                res.json(data)
                console.log("updating")
            })
            .catch(err => res.json(err))
    },
    likepet: (req, res) => {
        Pet.findById(req.params.id)
            .then(data => {
                console.log(data)
                data.likes++
                data.save();
                console.log("got the like")
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
}
