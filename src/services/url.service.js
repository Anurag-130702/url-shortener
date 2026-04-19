const URL = require('../models/url.model');
const generateShortCode = require('../utils/generateShortCode');
const redisClient = require('../config/redis');

exports.createShortUrl = async (originalUrl) => {
  const shortCode = generateShortCode();

  const newUrl = new URL({
    originalUrl,
    shortCode
  });

  await newUrl.save();
  return newUrl;
};

exports.getOriginalUrl = async (shortCode) => {

  await URL.findOneAndUpdate(
    { shortCode },
    { $inc: { clicks: 1 } }
  );


  const cached = await redisClient.get(shortCode);
  if (cached) {
    return cached;
  }
   

  const url = await URL.findOne({ shortCode });
  if (!url) return null;

  await redisClient.set(shortCode, url.originalUrl);

  //url.clicks += 1;
 // await url.save();

  return url.originalUrl;
};

exports.getUrlStats = async (shortCode) => {
  const url = await URL.findOne({ shortCode });

  if (!url) return null;

  return {
    originalUrl: url.originalUrl,
    clicks: url.clicks,
    createdAt: url.createdAt
  };
};



