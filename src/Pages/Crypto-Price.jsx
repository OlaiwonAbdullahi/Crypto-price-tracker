import { useState, useEffect } from "react";

const CryptoPrice = () => {
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state

  const fetchCoin = async () => {
    setLoading(true); // Set loading to true when fetching starts
    setError(null); // Reset error state before fetching

    try {
      const res = await fetch("https://api.coincap.io/v2/assets");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setCoin(data);
      console.log(data);
      // Update the state with the fetched data
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  useEffect(() => {
    fetchCoin(); // Call fetchCoin when the component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if it occurs
  }

  return (
    <div>
      <h2>Crypto Price</h2>
      {coin && (
        <div>
          <p>Bitcoin Price: ${coin.usd}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoPrice;
