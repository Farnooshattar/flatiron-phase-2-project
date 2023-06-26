import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

function CatCard({ card, deleteFromScreen }) {
  const { id, name, comment, url } = card;
  const [isFav, setFav] = useState(false);
  const onFavClick = () => setFav(!isFav);
  
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
