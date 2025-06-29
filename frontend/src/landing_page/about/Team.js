import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Piyush Gawali</h4>
          <h6>Engineering Student</h6>
        </div>
        <div className="col-6 p-3">
          <p>
           Hi, I'm Piyush Sanjay Gawali, an enthusiastic and self-driven Electronics and Telecommunication Engineering student at AISSM's Institute of Information Technology, Pune (Batch of 2027). My passion lies at the intersection of technology, innovation, and real-world problem-solving, which has led me to explore fields like Web Development, AI/ML, and Data Structures & Algorithms.

I’ve built impactful projects such as:

🧠 An AI-Based Forgery Detection System using YOLOv4 and OCR for fast, accurate verification of documents.

🌾 A smart agriculture platform "Smart Krushi" that won 1st prize at Techathon 2.0, combining AI chatbot support, government scheme recommendations, and multilingual access for farmers.

With a strong academic foundation (current CGPA: 8.9) and hands-on experience in both hardware and software projects, I’m constantly upskilling through certifications, internships, and hackathons.

Outside the tech world, I enjoy playing the tabla, reading books that offer life lessons, and playing cricket to refresh my mind.

I’m currently looking to collaborate, learn, and contribute to exciting projects and internships in the field of software development and AI applications. Let’s build something meaningful together!
          </p>
          
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;