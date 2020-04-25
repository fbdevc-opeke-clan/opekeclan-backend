/* eslint-disable no-console */
import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';


const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));


app.use('*', (req, res) => res.status(404).send({
  message: 'App not Found',
}));

app.use('/', (req, res) => res.status(200).send({
  message: 'Welcome Opeke Backend App',
}));


export default app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
