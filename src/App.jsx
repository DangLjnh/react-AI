import "./App.css";
import ReviewList from "./components/reviews/ReviewList";
import SearchSentiment from "./components/search/SearchSentiment";

function App() {
  return (
    <div className="App">
      <ReviewList></ReviewList>
      <SearchSentiment></SearchSentiment>
    </div>
  );
}

export default App;
