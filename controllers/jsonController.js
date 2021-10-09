const data = require('../models/data')

const addData = async (req, res) => {
  const val = await data.findOne({ id: req.body.id })
  if (val) {
    res.status(201).json({ msg: `data by the the id:${req.body.id} is already available` })
  } else {
    const { id, characters } = req.body
    const userData = characters.match(/[a-z]/gi)
    const dbObj = []
    for (let i = 0; i < userData.length; i++) {
      dbObj.push(`${userData[i]}`)
    }
    const newData = {
      id: `${id}`,
      characters: dbObj
    }
    const store = await data.create(newData)
    res.status(201).json({ data: `${store}`, msg: `data by the id:${req.body.id} has been created on the db` })
  }

}
module.exports = { addData };
