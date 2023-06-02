import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { warehouseRouter } from './routes/warehouseRouter';

import cors from 'cors';

export const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express Server');
});

app.use('/api', warehouseRouter);
