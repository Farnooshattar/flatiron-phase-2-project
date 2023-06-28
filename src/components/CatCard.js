import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CatCommentForm from "./CatCommentForm";

function CatCard({ card, deleteFromScreen }) {
  const { id, name, comment, url, fav } = card;
  const [isFav, setFav] = useState(fav);
  const [favDB, setFavDB] = useState({
    fav: fav,
  });

  const onFavClick = () => {
    const updatedFav = !isFav; // Get the updated value of isFav
    setFav(updatedFav);
    setFavDB({ fav: updatedFav }); // Pass the updated value to setFavDB
    console.log(favDB);
    fetch(`https://cats-json-database.onrender.com/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fav: updatedFav }), // Update the body with the correct field name
    });
  };

  const handleDelete = () => {
    fetch(`https://cats-json-database.onrender.com/cats/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => deleteFromScreen(id));
  };

  return (
    <Card>
      <div>
        <div className="image">
          <Link to={`/cats/${id}`}>
            <img src={url} />
          </Link>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <p className="paragraph">Click on image for more info</p>
          <span>
            {isFav ? (
              <button className="icon heart red" onClick={onFavClick}>
                ❤️
              </button>
            ) : (
              <button className="icon heartbeat red" onClick={onFavClick}>
                💟
              </button>
            )}
            <button className="emoji-button delete" onClick={handleDelete}>
              🗑
            </button>
          </span>
          <CatCommentForm id={id} />
        </div>
      </div>
    </Card>
  );
}

export default CatCard;
