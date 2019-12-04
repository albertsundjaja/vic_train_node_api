import express from 'express';
import trainRoutes from './routes/trainRoutes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json);

app.use(trainRoutes);

app.listen(8080);
