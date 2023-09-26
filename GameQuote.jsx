const { useState, useEffect } = require("react");
const RANDOM_QUOTE_URL = "https://www.ultima.rest/api/random";

export default function GameQuote() {
  const [quote, setQuote] = useState({ quote: "", title: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await response.json();
      const randomQuote = jsonResponse;
      setQuote(randomQuote);
      setIsLoading(false);
    }
    fetchQuote();
  }, []);

  return (
    <div>
      <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
        Loading...
      </p>
      <h1>{quote.title} ({quote.release})</h1>


      <h2>"{quote.quote}"</h2>      
     
      <i><h3>-  {quote.character} </h3></i>
    </div>
  );
}
