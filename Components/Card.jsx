import React, { useState, useEffect } from "react";
import { Fav } from "../hooks/fav";
import { Link } from "react-router-dom";
const Card = ({ cardInfo }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

  // useEffect(() => {
  //   const storedFavorites = localStorage.getItem("favorites");
  //   if (storedFavorites) {
  //     setFavorites(JSON.parse(storedFavorites));
  //   }
  // }, []);
  console.log(favorites);
  return (
    <div class="card">
      <img className="hero-image" src={cardInfo.image} alt="cat image" />
      <div class="card-info">
        <h2>{cardInfo.title}</h2>
        <p>{cardInfo.description}</p>
        <p>price:{cardInfo.price}</p>
        <button class="add-to-favourites" onClick={() => Fav(cardInfo.id)}>
          Add to Favourites
        </button>

        <Link to={`/id/${cardInfo.id}`}>
          <div className="view">View</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
