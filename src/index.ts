import { AppDataSource } from "./data-source"
import * as morgan from 'morgan';
import * as express from 'express';
import * as cors from 'cors'

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(express.json);
    app.use(morgan('dev'));
    app.use(cors());
    

}).catch(error => console.log(error))
