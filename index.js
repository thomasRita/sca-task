import express from 'express'
import bodyParser from 'body-parser';
import routes from './routes';

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes); 

app.get('/', (req, res) =>  {
    return res.status(200).json({ message: 'Creating APIs' })
})

app.use('*', (req, res) => res.status(404).json({
    message: 'Route not found',
  }));

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
