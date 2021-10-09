const data = require('../models/data')
const writeDummy = async (req, res, next) => {
  const { id: dataID, request } = req.body;
  let time = new Date();
  let result = req.text;
  let dataToBeSaved = {
    [`requested on ${time}`]: {
      id: `${dataID}`,
      result: result,
      request: request,
    },
  };
  let userData = req.file
  let newDataToBeSaved = {};
  if (userData.hasOwnProperty("requests")) {
    newDataToBeSaved = { ...userData["requests"], ...dataToBeSaved };
    const saved = await data.findOneAndUpdate({ id: dataID }, { requests: newDataToBeSaved }, {
      new: true,
      projection: { id: 0, _id: 0, __v: 0 }
    })
    res.status(200).send(saved);
  } else {
    newDataToBeSaved = { ...dataToBeSaved };
    const saved = await data.findOneAndUpdate({ id: dataID }, { requests: newDataToBeSaved }, {
      new: true,
      projection: { _id: 0, __v: 0 }
    })
    res.status(200).send(saved);
  }

};
module.exports = writeDummy;
