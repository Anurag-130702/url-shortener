const urlService = require('../services/url.service');

exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: 'URL is required' });
    }

    const result = await urlService.createShortUrl(originalUrl);

    res.json({
      shortUrl: `${req.protocol}://${req.get('host')}/${result.shortCode}`
    });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getStats = async (req, res) => {
  try {
    const { code } = req.params;

    const stats = await urlService.getUrlStats(code);

    if (!stats) {
      return res.status(404).json({ error: 'Not found' });
    }

    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const { code } = req.params;

    const originalUrl = await urlService.getOriginalUrl(code);

    if (!originalUrl) {
      return res.status(404).send('Not found');
    }

    res.redirect(originalUrl);
  } catch (err) {
    res.status(500).send('Error');
  }
};