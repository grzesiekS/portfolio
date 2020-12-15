const SkillTech = require('../db/skillTech.json');

exports.loadData = async (req, res) => {
  try {
    const result = SkillTech.data;
    if(!result) res.status(404).json({ data: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.loadSkills = async (req, res) => {
  try {
    const result = SkillTech.skills;
    if(!result) res.status(404).json({ skills: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.loadTech = async (req, res) => {
  try {
    const result = SkillTech.technologies;
    if(!result) res.status(404).json({ tech: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};