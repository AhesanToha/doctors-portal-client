import React from "react";
import quote from "../../assets/icons/quote.svg";

const Testimonials = () => {
  return (
    <section className="my-12">
      <dib className="flex justify-between">
        <div>
          {" "}
          <h4 className="text-secondary text-xl font-bold">Testimonials</h4>
          <h2 className="text-3xl">What Our Patients Say</h2>
        </div>

        <div>
          <img className="w-24 lg:w-48 " src={quote} alt="" />
        </div>
      </dib>
      <dib></dib>
    </section>
  );
};

export default Testimonials;
