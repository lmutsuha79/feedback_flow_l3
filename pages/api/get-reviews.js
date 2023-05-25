import gplay from "google-play-scraper";
import Sentiment from "sentiment";

async function getAllReviews(appId) {
  try {
    const data = await gplay.reviews({
      appId,
      sort: gplay.sort.NEWEST,
      num: 1000,
    });
    return data;
  } catch (err) {
    console;
  }
}

export default async (req, res) => {
  const { gplay_id } = req.body;
  // geting all reviews
  const reviews = await getAllReviews(gplay_id);

  // parse the reviews and perform sentiment analysis on reviews that contains a feedback
  const sentiment = new Sentiment();

  const new_reviews = reviews?.data.map((review) => {
    if (review.text.length) {
      const result = sentiment.analyze(review.text);
      return { ...review, sentiment: result.score };
    }
  });


  res.status(200).json({ reviews: new_reviews });
};
