import express from 'express';

export const GET_routes = (req:express.Request, res:express.Response, next: express.NextFunction) => {
    res.send({
        routes: [
            {
                'route_id':0,
                'route_name':"Craigieburn"
            }
        ]
    });
}