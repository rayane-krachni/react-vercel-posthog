import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setBitcoinPrice(data.bitcoin);
    };

    return () => socket.close(); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>Bitcoin Price</h1>
      <p>{bitcoinPrice ? `$${bitcoinPrice}` : "Loading..."}</p>
    </div>
  );
}

export default Dashboard;
