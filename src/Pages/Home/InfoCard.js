import React from "react";

const InfoCard = ({ img, cardTittle, bgClass, cardBody }) => {
  return (
    <div class={`pt-6 card lg:card-side bg-base-100 shadow-xl ${bgClass} `}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTittle}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;
