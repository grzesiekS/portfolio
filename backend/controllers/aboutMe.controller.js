const AboutMe = require('../db/aboutMe.json');

exports.loadAll = async (req, res) => {
  try {
    const result = AboutMe;
    if(!result) res.status(404).json({ aboutMe: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};