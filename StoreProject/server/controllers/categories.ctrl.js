"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const procedures = require("../procedures/categories.proc");
const router = express_1.Router();
router.get('/', (req, res) => {
    procedures.all()
        .then((categories) => {
        res.send(categories);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});
router.get('/:id', (req, res) => {
    procedures.read(req.params.id)
        .then((categories) => {
        res.send(categories);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});
exports.default = router;
