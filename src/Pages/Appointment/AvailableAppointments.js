import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const {
    data: services,
    error,
    isLoading,
    refetch
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  /* useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]); */
  return (
    <div>
      <h4 className="text-xl font-bold text-center text-secondary my-12">
        Available Appointment on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
        {services?.map((booking) => (
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
          refetch={refetch}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
