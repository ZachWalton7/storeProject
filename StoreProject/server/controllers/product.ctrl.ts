import { Router } from 'express';
import * as procedures from '../procedures/product.proc';

const router = Router();

router.get('/', (req, res) => {
    procedures.all()
    .then((product) => {
        res.send(product);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.get('/categories/:id', (req, res) => {
    procedures.categoryread(req.params.id)
    .then((product) => {
        res.send(product);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    procedures.read(req.params.id)
    .then((product) => {
        res.send(product);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});



export default router;
