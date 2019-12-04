import express from 'express';
import trainRoutes from './routes/trainRoutes';
import bodyParser from 'body-parser';
import {mongoConnect} from './dbs/mongo';

const app = express();

app.use(bodyParser.json);

app.use(trainRoutes);

mongoConnect(() => {
    app.listen(8080);
})
