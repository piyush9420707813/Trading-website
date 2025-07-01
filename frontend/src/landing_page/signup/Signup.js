import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/send-otp`, {
        email,
      });
      setMessage("OTP sent successfully!");
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Error sending OTP:", err);
      setMessage("❌ An error occurred while sending the code.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Signup;
