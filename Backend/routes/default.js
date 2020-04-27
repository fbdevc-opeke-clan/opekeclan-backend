import express from 'express';

const defaultRouter = express();

defaultRouter.get('/api/v1', (req, res) => res.status(200).json({
  message: 'Welcome Opeke Backend App',
}));

defaultRouter.get('*', (req, res) => res.status(404).json({
  message: 'Cannot find Opeke Backend App',
}));

export default defaultRouter;
