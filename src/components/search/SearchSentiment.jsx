import axios from "axios";
import React, { useState } from "react";

const SearchSentiment = () => {
  const [search, setSearch] = useState("");
  const handleCheckSentiment = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:5000/predict_sentiment", {
      text: search,
    });
    if (res) {
      alert(res.data.sentiment);
      setSearch("");
    }
  };
  return (
    <form onSubmit={(e) => handleCheckSentiment(e)} className="form-check">
      <input
        type="text"
        name="check-Sentiment"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchSentiment;
