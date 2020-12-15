const express = require('express');
const router = express.Router();

const myProjects = require('../controllers/myProjects.controller');

router.get('/myProjects/data', myProjects.loadData);
router.get('/myProjects/projects', myProjects.loadProjects);

module.exports = router;