import { AppDataSource } from "./data-source"
import * as morgan from 'morgan';
import * as express from 'express';
import * as cors from 'cors'
import routes from "./router";

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(express.json);
    app.use(morgan('dev'));
    app.use(cors());
    app.use(routes);

    return app.listen(process.env.PORT, () => console.log(`Aplicação online na porta ${process.env.PORT}`));
}).catch(error => console.log(error))
