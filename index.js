import express from 'express'
import morganLogger from 'morgan'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import swagger from './swagger'
import routes from './routes'
import logger from './services/logger'

const app = express()

app.use(morganLogger('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))

app.use('/', routes)

app.get('/', (req, res) =>  {
    return res.status(200).json({ message: 'Creating APIs' })
})

app.use('*', (req, res) => res.status(404).json({
    message: 'Route not found',
  }));

  // handling all the request errors
app.use((err, req, res, next) => {
    logger.info(err.stack);
    const { statusCode, errorResponse } = err;
  
    // next();
    return res.status(statusCode).json(errorResponse);
  });

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000')
})
