/* eslint-disable react/prop-types */
import { data } from "../js/dataCards";

export default function Cards() {
return data.map((card) => {
    return (
      <div className="card" key={card.id}>
        <img src={card.imgUrl} alt={card.title} />
        <div className="info">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-text">{card.description}</p>
        </div>
      </div>
    );
  });
}