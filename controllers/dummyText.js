const emoji = require("node-emoji");
const emojiList = require("./emoji");
const data = require('../models/data')
const getRegEx = require("./regex");
const dummyText = async (req, res, next) => {
  let time = new Date();
  req.start = time.getMilliseconds();
  let { id, request } = req.body;
  req.file = await data.findOne({ id }, { 'id': 0, '__v': 0, })
  if (req.file) {
    let characters = req.file.characters;
    req.text = request;
    characters.forEach(element => {
      req.text = req.text.replace(
        getRegEx(element),
        emoji.get(emojiList[element])

      );
    });
    console.log(req.text);
    next()
  } else {
    res.status(404).json({ msg: `id: ${id} not found on database` });
  }

}

module.exports = dummyText;
