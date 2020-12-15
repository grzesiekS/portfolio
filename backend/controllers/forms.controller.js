const Forms = require('../db/forms.json');

exports.loadAll = async (req, res) => {
  try {
    const result = Forms;
    if(!result) res.status(404).json({ forms: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};