import React, { useState, useEffect } from "react";
import CatCollection from "../CatCollection";
import CatForm from "../CatForm";
import Search from "../Search";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

function CatPage() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/cats")
      .then((response) => response.json())
      .then((data) => setCollection(data));
  }, []);

  function addCat(newCat) {
    setCollection((prevCollection) => [newCat, ...prevCollection]);
  }

  function searchCard(searchedCard) {
    const filteredCollection = collection.filter(
      (card) => card.name === searchedCard
    );
    setCollection(filteredCollection);
  }
  const deleteFromScreen = (itemId) => {
    setCollection(collection.filter((item) => itemId !== item.id));
  };

  return (
    <Container style={{ color: "white" }}>
      <br />
      <Search searchCard={searchCard} />
      <br />
      <CatForm addCat={addCat} />
      <br />
      <Link style={{ fontWeight: "bold" }} to="/">
        Go to Home Page
      </Link>
      <br />
      <br />
      <br />
      <CatCollection
        collection={collection}
        deleteFromScreen={deleteFromScreen}
      />
    </Container>
  );
}

export default CatPage;
