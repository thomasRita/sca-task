import express from 'express'
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) =>  {
    return res.status(200).json({ info: 'Creating APIs' })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
