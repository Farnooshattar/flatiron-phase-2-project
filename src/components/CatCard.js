import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

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
    fetch(`http://localhost:6001/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fav: updatedFav }), // Update the body with the correct field name
    });
  };

  const handleDelete = () => {
    fetch(`http://localhost:6001/cats/${id}`, { method: "DELETE" })
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
          {/* <Popupmodal
            updatedcomment={updatedcomment}
            handleNewComment={handleNewComment}
          /> */}
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
                💔
              </button>
            )}
            <button className="emoji-button delete" onClick={handleDelete}>
              🗑
            </button>
          </span>
          <CommentForm id={id} />
        </div>
      </div>
    </Card>
  );
}

export default CatCard;
