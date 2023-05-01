import gplay from "google-play-scraper";

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
  // console.log("the sent gpaly is ", gplay_id);
  const reviews = await getAllReviews(gplay_id);
  // console.log(reviews.data)
  res.status(200).json({ reviews: reviews.data});
};
