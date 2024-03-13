const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

exports.handler = async (event, context) => {
  const { data } = await T.get('statuses/user_timeline', { screen_name: 'your_twitter_handle', count: 10 });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
