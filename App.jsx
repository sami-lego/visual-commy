import "./App.css";

import Hero from "./Components/Hero";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Components/Card";
function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const data = axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then(function (response) {
        // handle success
        setData(response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log("Data", Data);

  return (
    <div className="App">
 
      <Hero />
      <div className="card-containers">
        {Data && Data?.[0]?.title
          ? Data?.map((item) => {
              return <Card cardInfo={item} />;
            })
          : "no"}
      </div>
    </div>
  );
}

export default App;
