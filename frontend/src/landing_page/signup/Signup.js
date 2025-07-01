app.post("/send-otp", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Simulated OTP generation
  console.log("OTP requested for:", email);
  return res.status(200).json({ message: "OTP sent successfully!" });
});
