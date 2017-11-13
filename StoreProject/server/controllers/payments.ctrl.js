"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stripeService = require("../services/stripe.svc");
const router = express_1.Router();
router.post('/', (req, res) => {
    let amount = Number(req.body.amount);
    stripeService.charge(req.body.token, amount)
        .then((success) => {
        console.log(success);
        res.sendStatus(204);
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e.message);
    });
});
exports.default = router;
