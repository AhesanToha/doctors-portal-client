import React from "react";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  return (
    <div className="card w-[85%]  bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary mx-auto">{name}</h2>
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
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(booking)}
            className="btn btn-secondary text-white uppercase"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;
