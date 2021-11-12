const Author = require("../models/author.model");

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json({message: "Something went wrong when creating a author", err: err}))
}

module.exports.findRandomAuthor = (req, res) => {
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }

    Author.findOne({_id: req.params._id})
        .then(randomAuthor => {
            const randomIndex = getRandomInt(allAuthors.length)
            res.json({results: allAuthors[randomIndex]})
        })
        .catch(err => res.json({message: "Something went wrong when finding a random author", err: err}))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Something went wrong when finding a author", err: err}))
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({message: "Something went wrong when finding all the authors", err: err}))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json({message: "Something went wrong when updating a author", err: err}))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json({message: "Something went wrong when deleting a author", err: err}))
}