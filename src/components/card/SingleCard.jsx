import React from "react";

const SingleCard = (props) => {
  const { id, title, description, img, price } = props.location.state;

  return (
    <div>
      <h1>ТЕКСТЕКСТЕКСТ</h1>
      <p>{description}</p>
      <p>{price} руб.</p>
      <img src={img} alt={title} />
    </div>
  );
};

export default SingleCard;