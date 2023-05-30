export const mapSentimentToEmoji = (sentiment) => {
  if (sentiment >= 4) {
    return "😍"; // Very positive emoji
  }
  if (sentiment >= 2) {
    return "😄"; // Positive emoji
  }
  if (sentiment > 0) {
    return "🙂"; // Slightly positive emoji
  }
  if (sentiment === 0) {
    return "😐"; // Neutral emoji
  }
  if (sentiment >= -1) {
    return "😔"; // Slightly negative emoji
  }
  if (sentiment >= -4) {
    return "😞"; // Negative emoji
  } else {
    return "😡"; // Very negative emoji
  }
};
