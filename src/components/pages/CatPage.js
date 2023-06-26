import React, { useState, useEffect } from "react";
import CatCollection from "../CatCollection";
import CatAddForm from "../CatAddForm";
import CatSearch from "../CatSearch";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

function CatPage() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    // Fetch cat collection data from the server
    fetch("http://localhost:6001/cats")
      .then((response) => response.json())
      .then((data) => setCollection(data));
  }, []);

  function addCat(newCat) {
    // Add a new cat to the collection
    setCollection((prevCollection) => [newCat, ...prevCollection]);
  }

  function searchCard(searchedCard) {
    // Filter the collection based on the searched card name
    const filteredCollection = collection.filter(
      (card) => card.name === searchedCard
    );
    setCollection(filteredCollection);
  }

  const deleteFromScreen = (itemId) => {
    // Remove an item from the collection based on its ID
    setCollection(collection.filter((item) => itemId !== item.id));
  };

  return (
    <Container style={{ color: "white" }}>
      <br />
      {/* Component for searching cards */}
      <CatSearch searchCard={searchCard} />
      <br />
      {/* Component for adding a new cat */}
      <CatAddForm addCat={addCat} />
      <br />
      <Link style={{ fontWeight: "bold" }} to="/">
        Go to Home Page
      </Link>
      <br />
      <br />
      <br />
      {/* Component for displaying the cat collection */}
      <CatCollection
        collection={collection}
        deleteFromScreen={deleteFromScreen}
      />
    </Container>
  );
}

export default CatPage;
