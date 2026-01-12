"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      date,
      comment,
    };

    
    alert("Booking request sent!");
    setName("");
    setEmail("");
    setDate("");
    setComment("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3  className={styles.title} >Book your campervan now</h3>
      <p className={styles.subtitle} >Stay connected! We are always ready to help you.</p>

      <input
      className={styles.field}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
      className={styles.field}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
      className={styles.field}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <textarea
      className={`${styles.field} ${styles.textarea}`}
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button className={styles.button} type="submit">Send</button>
    </form>
  );
}
