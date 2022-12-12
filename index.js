const express = require('express')
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

const projects = require('./data/Projects.json')
const projectsDetails = require('./data/ProjectDetails.json')


app.use(cors());
app.use(express.json());

app.get('/projects', (req, res) => {
    res.send(projects)
})
app.get('/projects/:id', (req, res) => {
    const id = req.params.id
    const result = projectsDetails.filter(data => data.cetagory_id === id)
    res.send(result)
})

app.get('/', (req, res) => {
    res.send('portfolio web  sarvar is running')
})

app.listen(port, () => console.log(`portfolio web running on ${port}`))