import { Router } from 'express';
import * as procedures from '../procedures/purchases.proc';

const router = Router();


router.get('/', (req, res) => {
    procedures.all()
    .then((posts) => {
        res.send(posts);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    procedures.read(req.params.id)
    .then((post) => {
        res.send(post);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    procedures.create(req.body.price, req.body.stripetransactionid)
    .then((response) => {
        res.send(response);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    procedures.update(req.params.id, req.body.price, req.body.stripetransactionid)
    .then(() => {
        res.sendStatus(204);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    procedures.destroy(req.params.id)
    .then(() => {
        res.sendStatus(204);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

export default router;