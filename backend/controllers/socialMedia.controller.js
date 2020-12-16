const SocialMedia = require('../db/socialMedia.json');

exports.loadTitle = async (req, res) => {
  try {
    const result = SocialMedia.title;
    if(!result) res.status(404).json({ title: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.loadData = async (req, res) => {
  try {
    const result = SocialMedia.data;
    if(!result) res.status(404).json({ data: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};