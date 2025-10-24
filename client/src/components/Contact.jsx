import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const serviceID = "service_p8a9ych";
    const templateID = "template_od3s9yr";
    const publicKey = "ksda-3eTg5R7GxfP4";

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          user_name: name,
          user_email: email,
          message: message,
        },
        publicKey
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section
      data-scroll-section
      id="CONTACT"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-[#fcfcfc] overflow-hidden"
    >
      {/* Subtle floating glow elements */}
      <div className="absolute top-24 left-10 w-96 h-96 bg-blue-300 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-300 blur-3xl rounded-full animate-pulse"></div>

      <div
        data-scroll
        data-scroll-speed="-.3"
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center mb-20"
      >
        {/* Left: Heading */}
        <div className="text-[#122620] space-y-6">
          <h1 className="contact-h1 font-bold leading-tight">
            Let’s Create <br /> Something{" "}
            <span className=" text-yellow-400 text-shadow-sm text-shadow-blue-800">
              Amazing
            </span>
          </h1>
          <p className="text-[#252222] max-w-md">
            Whether you have a question, want to start a project, or simply want
            to connect — feel free to drop me a message.
          </p>
        </div>

        {/* Right: Form */}
        <div className="relative backdrop-blur-md bg-[#f3f3f7] border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 bg-white/10 text-[#000000] rounded-lg border border-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 bg-white/10 text-[#000000] rounded-lg border border-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              className="w-full px-5 py-3 bg-white/10 text-[#000000] rounded-lg border border-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={status === "loading"}
              className="relative r-2 w-48 bg-[#1E3A8A] hover:opacity-90 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status messages */}
          {status === "success" && (
            <p className="mt-4 text-green-400 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400 text-center">
              Failed to send. Try again later.
            </p>
          )}
        </div>
      </div>
      <svg
        className=" absolute bottom-0 left-0 w-full h-40 md:h-64 z-10" // Increased height and lowered z-index
        viewBox="0 0 1440 240" // Adjusted viewBox height for a gentler slope
        preserveAspectRatio="none"
      >
        {/* 1. Define the Gradient for Depth */}
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            {/* Starting color (closer to the wave peak) - Subtle shadow effect */}
            <stop offset="0%" stopColor="#003786" stopOpacity="0.8" />
            {/* Ending color (base color) - The primary background color */}
            <stop offset="100%" stopColor="#003786" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* 2. The Smoother Wave Path */}
        <path
          fill="#003786" // Use the defined gradient instead of a flat color
          d="M0,96C80,128,240,192,480,192C720,192,960,128,1200,96C1320,80,1380,80,1440,80L1440,240L0,240Z"
        ></path>
      </svg>
    </section>
  );
}

export default Contact;
