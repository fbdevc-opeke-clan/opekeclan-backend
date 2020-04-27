/* eslint-disable no-console */
import express from 'express';
import logger from 'morgan';
import defaultRouter from './routes/default';


const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use('/', defaultRouter);


export default app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
