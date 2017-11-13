import { Router } from 'express';
import { sendEmail } from '../services/email.svc';
const router = Router();
router.post('/', (req, res) => {
    sendEmail('blargo11@gmail.com', req.body.from, 'You have a new Contact Form submission', req.body.message)
    .then((response) => {
        res.sendStatus(201);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
});
export default router;