const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//*MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//*ROUTES

// //?GET REQUEST
// app.get('/api/v1/tours', getAllTours);

// app.get('/api/v1/tours/:id', getTour);

// //?POST REQUEST
// app.post('/api/v1/tours', createTour);

// //?PATCH REQUEST
// app.patch('/api/v1/tours/:id', updateTour);

// //?DELETE REQUEST
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//*START SERVER
module.exports = app;
