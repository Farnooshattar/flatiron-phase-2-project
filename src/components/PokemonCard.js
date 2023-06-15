import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({card}) {
  const {id, name, hp, sprites} = card
  const [side, showSide] = useState("true")
  const onCardClick = () => showSide(!side)
  
  return (
    <Card onClick={onCardClick}>
      <div>
        <div className="image">
          {(side)?
          <img src={sprites.front} alt="oh no!" />
          : <img src={sprites.back} alt="oh no!" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
