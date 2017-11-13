import { join } from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import apiRouter from './api';
import stateRouting from './middleware/routing.mw';

const clientPath = join(__dirname, '../client');

const app = express();

const prerender = require('prerender-node');
prerender.set('prerenderToken', process.env.PRERENDER_TOKEN);
app.use(prerender);

app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());


app.use('/api', apiRouter);

app.get('*', stateRouting);

app.listen(process.env.PORT || 3001, () => {
    console.log('listening on port 3001');
});
