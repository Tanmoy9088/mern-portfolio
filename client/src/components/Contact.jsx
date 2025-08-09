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
      id="CONTACT"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Subtle floating glow elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Heading */}
        <div className="text-white space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Let’s Create <br /> Something Amazing
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Whether you have a question, want to start a project, or simply want
            to connect — feel free to drop me a message.
          </p>
        </div>

        {/* Right: Form */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition placeholder-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition placeholder-gray-300"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              className="w-full px-5 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition placeholder-gray-300 resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:opacity-90 text-black font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 disabled:opacity-60"
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
    </section>
  );
}

export default Contact;
