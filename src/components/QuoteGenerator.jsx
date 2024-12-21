import React, { useState } from 'react'
import './QuoteGenerator.css'
import { IoReload } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const QuoteGenerator = () => {

  const [loading, setLoading] = useState(false);

  let [dquote, setQuote] = useState({
    quote: "Believe You can and you are halfway there",
    author: "Puspalal Newar"
  });

  

  async function loadQuotes() {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    setQuote(data.quotes[Math.floor(Math.random() * (data.quotes.length))]);
    setLoading(false);
  }

  // console.log(allquotes[0].author);

  // const random =()=>{
  //   const select = allquotes[Math.floor(Math.random(allquotes.length))];
  //   setQuote(select);
  // }

  return (
    <div>
      <header>Quote Generator By Puspalal</header>
      <div className="container">
        <div className="quote">{loading ? "Loading...." : dquote.quote}</div>
        <div>
          <div className="line"></div>
          <div className="bottom">
            <div className="author">
              -{dquote.author}
            </div>
            <div className="icons">
              <IoReload onClick={() => loadQuotes()} />
              <RiTwitterXFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteGenerator
