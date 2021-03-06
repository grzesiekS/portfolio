const express = require('express');
const cors = require('cors');
const path = require('path');

const aboutMeRoutes = require('./routes/aboutMe.routes');
const formsRoutes = require('./routes/forms.routes');
const myProjectsRoutes = require('./routes/myProjects.routes');
const skillTechRoutes = require('./routes/skillTech.routes');
const socialMediaRoutes = require('./routes/socialMedia.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public/images')));

/* API ENDPOINTS */
app.use('/api', aboutMeRoutes);
app.use('/api', formsRoutes);
app.use('/api', myProjectsRoutes);
app.use('/api', skillTechRoutes);
app.use('/api', socialMediaRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});