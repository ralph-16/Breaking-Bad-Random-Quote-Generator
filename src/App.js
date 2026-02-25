//React component (UI + logic)
//API for Quotes "https://api.breakingbadquotes.xyz/v1/quotes"

import './App.css';
import React, { useState, useEffect } from "react";


function App() {
  return (
    <div className="d-flex flex-column justify-content-evenly align-items-center app-container">
      <Header />
      <QuoteBox />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="d-flex flex-column align-items-sm-center">
      <h1 className="display-4 text-center">Random Breaking Bad Quotes</h1>
    </div>
  )
}

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  async function getRandomQuote() {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="container w-75 h-100 bg-light rounded shadow p-4" id="quote-box">
      <p id="text" className="text-center m-0 h2">{quote}</p>
      <p id="author" className="text-end m-0">{author}</p>

      <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_top" className="btn btn-light p-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
      </a>
      <button id="new-quote" type="button" className="btn btn-light p-1" onClick={getRandomQuote}>
        <p className="m-0">New Quote</p>
      </button>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <h3>By Gian Raphael</h3>
    </div>
  )
}



export default App;
