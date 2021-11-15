const URL = require('../models/Urls');
const baseUrl = 'http://localhost:3000/api';
const moment = require('moment');

exports.createNewShortUrl = async (req, res, next) => {
  try {
    const { longUrl } = req.body;
    let { userName } = req.body;
    if (userName === '') userName = 'DB';
    const iD = '_' + Math.random().toString(36).substr(2, 9);
    const shortUrl = baseUrl + '/' + iD + '/' + userName;
    const userUrlArr = await URL.find({ userName: userName });
    if (userUrlArr.length === 0) {
      const newURL = await URL.create({
        userName: userName,
        longUrl: longUrl,
        _id: iD,
        shortUrl: shortUrl,
        numOfEnter: 0,
      });
      res.status(200).send({ shortUrl: `${shortUrl}`, id: iD });
    }
    // res.send({"shortUrl":`${shortUrl}/${userName}`,"id":iD});
    else {
      for (let url of userUrlArr) {
        if (url.longUrl == longUrl) return res.send({ shortUrl: `${url.shortUrl}`, id: url._id });
      }
      const newURL = await URL.create({
        userName: userName,
        longUrl: longUrl,
        _id: iD,
        shortUrl: shortUrl,
        numOfEnter: 0,
      });
      return res.send({ shortUrl: `${shortUrl}`, id: iD });
    }
  } catch (error) {
    next(error);
  }
};

exports.getUrl = async (req, res, next) => {
  try {
    const id = req.params.id;
    await URL.updateOne({ id: id }, { $inc: { numOfEnter: 1 } }); // increase by ones
    const urlNow = await URL.find({ id: id });
    res.status(301).header('location', urlNow[0].longUrl);
    res.end();
  } catch (error) {
    next(error);
  }
};

exports.statistics = async (req, res, next) => {
  try {
    const id = req.params.id;
    const wanted = await URL.find({ id: id });
    const Wanted = wanted[0];
    let data = { date: moment(Wanted.createdAt).format('MMM Do YY'), redirectCount: Wanted.numOfEnter };
    res.send(data);
  } catch (error) {
    next(error);
  }
};
