import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-xl text-center text-secondary">
        You have selected: {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((booking) => (
          <Booking key={booking._id} booking={booking}></Booking>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
