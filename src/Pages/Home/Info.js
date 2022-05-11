import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTittle="Opening Ours"
        cardBody="Lorem Ipsum is simply dummy text of the pri"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTittle="Visit Our Location"
        cardBody="Brooklyn, NY 10036, United States"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTittle="Contact Us Now"
        cardBody="+000 123 456789"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
