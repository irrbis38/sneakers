import style from "./Card.module.scss";
import React from "react";

function Card({ id, imageUrl, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price, id });
    setIsAdded(!isAdded);
  };

  return (
    <div className={style.card}>
      <div className={style.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
          alt="Plus"
          className={style.plus}
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
