const MyProjects = require('../db/myProjects.json');

exports.loadData = async (req, res) => {
  try {
    const result = MyProjects.data;
    if(!result) res.status(404).json({ data: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.loadProjects = async (req, res) => {
  try {
    const result = MyProjects.projects;
    if(!result) res.status(404).json({ projects: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};