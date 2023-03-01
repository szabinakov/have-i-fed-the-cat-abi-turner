const express = require('express');

const { Cat } = require('./models');

const app = express();

app.use(express.json());

app.post("/cats", (req, res) => {
    Cat.create(req.body)
        .then((cat) => res.status(201).json(cat))
        .catch((err) => {
            console.error("error", err);
            res.status(400).json({ error: "Bad request!" });
        });
});
  
app.get('/cats', (req, res) => {
    Cat.findAll({ where: req.query })
        .then((cat) => res.status(201).json(cat))
        .catch((err) => {
            console.error("error", err);
            res.status(400).json({ error: "Bad request!" });
        });
});

app.get('/cats/:catId', (req, res) => {
    Cat.findByPK(req.params.catId)
        .then((cat) => res.status(201).json(cat))
        .catch((err) => {
            console.error("error", err);
            res.status(400).json({ error: "Bad request!" });
        });
});

app.patch('/cats/:catId', (req, res) => {
    Cat.update(req.body, { where: { id: req.params.catId } })
        .then((cat) => res.status(201).json(cat))
        .catch((err) => {
            console.error("error", err);
            res.status(400).json({ error: "Bad request!" });
        });
});

app.patch('/cats/:catId', (req, res) => {
    Cat.update({ lastFed: new Date() }, { where: { id: req.params.catId } })
        .then((cat) => res.status(201).json(cat))
        .catch((err) => {
            console.error("error", err);
            res.status(400).json({ error: "Bad request!" });
        });
});

app.delete('/cats/:catId', (req, res) => {
    Cat.destroy({ where: { id: ID_TO_DELETE } })
        .then((cat) => res.status(201).json(cat))
        .catch((err) => {
            console.error("error", err);
            res.status(400).json({ error: "Bad request!" });
        });
});

module.exports = app;