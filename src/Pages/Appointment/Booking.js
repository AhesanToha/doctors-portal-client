import React from "react";

const Booking = ({ booking }) => {
  const { name, slots } = booking;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="card-title text-secondary mx-auto">{name}</h2>
        <p className="text-sm">
          {slots.length ? (
            <span className="font-bold ">{slots[0]}</span>
          ) : (
            <span className=" text-red-600 font-bold">Try Another Date</span>
          )}
        </p>
        <p className="uppercase text-sm">
          {slots.length} {slots.length < 1 ? "space " : "spaces "} available
        </p>
        <div class="card-actions justify-center">
          <button disabled={slots.length === 0} class="btn btn-secondary text-white uppercase">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
