import React from "react";
import axios from "axios";

const Crypto = () => {
  const [coin, setCoin] = React.useState([]);
  //CRYPTO CURRENCY
  const getCryptoCurrency = () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "4dee516275mshb9f4158543c2b31p1fb2d2jsn183e51d773bc",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setCoin(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  React.useEffect(() => {
    getCryptoCurrency();
  }, []);
  console.log(coin);
  return (
    <div className="coin">
      <h1>Crypto Currency</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Listed At</th>
            <th>BtcPrice</th>
            <th>Market Cap</th>
            <th>Change</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {coin.map((coin) => {
            return (
              <tr key={coin.rank} style={{ color: coin.color }}>
                <td>{coin.rank}</td>
                <td>
                  <img src={coin.iconUrl} width="15px" /> {coin.name}
                </td>
                <td>{coin.symbol}</td>
                <td>{coin.listedAt}</td>
                <td>&#36;{coin.btcPrice}</td>
                <td>{coin.marketCap}</td>
                <td>&#36;{coin.change}</td>
                <td>&#36;{coin.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Crypto;
