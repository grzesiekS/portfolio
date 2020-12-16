const express = require('express');
const router = express.Router();

const skillTech = require('../controllers/skillTech.controller');

router.get('/skillTech/data', skillTech.loadData);
router.get('/skillTech/skills', skillTech.loadSkills);
router.get('/skillTech/tech', skillTech.loadTech);

module.exports = router;