import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-xl font-bold text-center text-secondary my-12">
       Available Appointment on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((booking) => (
          <Booking
            key={booking._id}
            setTreatment={setTreatment}
            booking={booking}
          ></Booking>
        ))}
      </div>
      {treatment && (
        <BookingModal
        key={"1"}
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
