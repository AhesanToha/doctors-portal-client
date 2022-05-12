import React from "react";

const Review = ({ review }) => {
  const { name, description, img, location } = review;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{description}</p>
      </div>
      <div className="flex items-center px-8 pb-4">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
