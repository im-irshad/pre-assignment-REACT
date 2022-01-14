import React, { useState, useEffect } from "react";

import CardList from "./CardList";

function Home() {
  const [displayCards, setDisplayCards] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const handleDelete = (id) => {
    const newDisplayCards = displayCards.filter((displayCard) => {
      return displayCard.id !== id;
    });
    setDisplayCards(newDisplayCards);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDisplayCards(data);
        setisLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <div>Loading.......</div>}
      {displayCards && (
        <CardList displayCards={displayCards} handleDelete={handleDelete} />
      )}
      ;{" "}
    </div>
  );
}

export default Home;
