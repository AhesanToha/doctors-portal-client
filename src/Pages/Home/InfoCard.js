import React from "react";

const InfoCard = ({ img, cardTittle, bgClass, cardBody }) => {
  return (
    <div className={`pt-6 lg:pt-0 card lg:card-side bg-base-100 shadow-xl ${bgClass} `}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTittle}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;
