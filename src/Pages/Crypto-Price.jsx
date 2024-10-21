import { useState } from "react";

const CryptoPrice = () => {
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);

  const fetchCoin = async () => {
    try {
      const res = await fetch("https://api.coincap.io/v2/assets");
    } catch (error) {
      setError(error.message);
    }
  };
  return <div>Crypto-Price</div>;
};

export default CryptoPrice;
