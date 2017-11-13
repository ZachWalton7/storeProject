"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_svc_1 = require("../services/email.svc");
const router = express_1.Router();
router.post('/', (req, res) => {
    email_svc_1.sendEmail('blargo11@gmail.com', req.body.from, 'You have a new Contact Form submission', req.body.message)
        .then((response) => {
        res.sendStatus(201);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});
exports.default = router;
