import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [loading, setLoading] = useState(true);
  const [dollar, setDollar] = useState("");
  const [coins, setCoins] = useState([]);
  const onDollarChange = (event) => {
    setDollar(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  });

  useEffect(() => {});

  return (
    <div>
      <label for="converter">convert dollar to coin</label>
      <input
        id="converter"
        onChange={onDollarChange}
        placeholder="convert dollar to coin"
        value={dollar}
      ></input>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} : BTC :
            {coin.quotes.USD.price / coins[0].quotes.USD.price} : Number of
            coins you can buy => {dollar / coin.quotes.USD.price}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
