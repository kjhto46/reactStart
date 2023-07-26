import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => {
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      });
    });
  }, []);
  return (
    <div>
      <h1>The coins! ({coins.length})</h1>
      {loading ? <strong>로딩중..</strong> : null}
      <ul>
        {coins.map((coinApi) => (
          <li key={coinApi.id}>{coinApi.name} ({coinApi.symbol}) : ${coinApi.quotes.USD.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
