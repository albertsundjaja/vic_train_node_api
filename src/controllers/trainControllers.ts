import express from 'express';
import {TrainRoute} from '../models/TrainRoute';

export const GET_routes = (req:express.Request, res:express.Response, next: express.NextFunction) => {
    TrainRoute.loadAll()
    .then((routes:any) => {
        res.send({
            routes: routes
        })
    })
    .catch((err:any) => {
        console.log(err);
        res.send({
            error: true
        })
    })
}