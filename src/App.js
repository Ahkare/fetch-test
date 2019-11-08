import React, { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState([]);

  async function getSimpsonsQuote() {
    const response = await fetch(
      "https://quests.wilders.dev/simpsons-quotes/quotes"
    );
    const quotes = await response.json();
    setQuote(quotes[0]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={quote.image} alt="" />
        <h3>{quote.character}</h3>
        <p>{quote.quote}</p>

        <button onClick={getSimpsonsQuote}>Récupérer des citations</button>
      </header>
    </div>
  );
}

export default App;
