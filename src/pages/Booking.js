import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();

  return (
    <main className="booking">
      <h1>Booking</h1>
      <section>
        <img
          src={"https://ca-times.brightspotcdn.com/dims4/default/4f9761e/2147483647/strip/true/crop/3500x1969+0+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa3%2Fbc%2F967153f7443ab69d6b182b91b1f4%2Ffo-quickbites-07102022-02.jpg"}
          alt="Our outdoor ambience"
          style={{ borderRadius: "8px", width: "65%" }}
        />
      </section>
      <section>
        <BookingForm navigate={navigate} />
      </section>
    </main>
  );
};

export default Booking;