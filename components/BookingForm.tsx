"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      email,
      date,
      comment,
    };

    console.log("Booking data:", data);
    alert("Booking request sent!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">Send</button>
    </form>
  );
}
