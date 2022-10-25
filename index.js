const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Course API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(courses)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(course);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/course', (req, res) => {
    res.send(course);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})
