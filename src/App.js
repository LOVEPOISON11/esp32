import React from "react";

const ESP_IP = "http://192.168.36.180"; 

const App = () => {
  const handleAction = async (action) => {
    await fetch(`${ESP_IP}/${action}`);//change

  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ESP32 Circuit Controller</h1>
      <button
        onClick={() => handleAction("on")}
        style={{
          padding: "15px",
          fontSize: "20px",
          background: "green",
          color: "white",
          marginRight: "20px",
        }}
      >
        Turn ON
      </button>
      <button
        onClick={() => handleAction("off")}
        style={{
          padding: "15px",
          fontSize: "20px",
          background: "red",
          color: "white",
        }}
      >
        Turn OFF
      </button>
    </div>
  );
};

export default App;