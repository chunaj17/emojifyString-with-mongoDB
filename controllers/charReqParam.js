const data = require('../models/data')


const charactersParam = async (req, res) => {
  let { id: dbID, value: dbValue } = req.params;
  const db = await data.findOne({ id: dbID })
  if (db) {
    if (dbValue === "characters") {
      res.status(200).json({ characters: db.characters })
    } else {
      res.status(200).json({ requests: db.requests })
    }
  } else {
    res.status(404).json({ msg: `data by the id:${dbID} not found` })
  }
}

module.exports = charactersParam;
