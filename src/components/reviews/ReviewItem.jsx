import axios from "axios";
import React, { useState } from "react";

const ReviewItem = ({ content }) => {
  const [sentiment, setSentiment] = useState("");
  const handleCheckSentiment = async (content) => {
    const res = await axios.post("http://127.0.0.1:5000/predict_sentiment", {
      text: content,
    });
    if (res) setSentiment(res.data.sentiment);
  };
  return (
    <div className="outer" key={content.id}>
      <p>{content.comment}</p>
      <button onClick={() => handleCheckSentiment(content.comment)}>
        Check sentiment
      </button>
      {sentiment}
    </div>
  );
};

export default ReviewItem;
