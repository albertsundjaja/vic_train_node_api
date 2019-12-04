import {getDb} from '../dbs/mongo';

export class TrainRoute {
    constructor(
       public route_id:number,
       public route_name:string,
       public stops:object[]
    ) {}

    static loadAll() {
        const db = getDb();
        return db.collection('routes').find().toArray();
    }
}