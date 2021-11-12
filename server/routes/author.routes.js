const AuthorController = require("../controllers/author.controller")

module.exports = app => {
    app.post("/api/authors/create", AuthorController.createAuthor);

    app.get("/api/authors/random", AuthorController.findRandomAuthor);

    app.get("/api/authors/:_id", AuthorController.findOneAuthor);

    app.get("/api/authors", AuthorController.findAllAuthors);

    app.put("/api/authors/update/:_id", AuthorController.updateAuthor);

    app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor);
}