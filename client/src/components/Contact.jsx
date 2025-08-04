import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState(""); // success | error | loading
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

   const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 400);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const serviceID = "service_p8a9ych";
    const templateID = "template_od3s9yr";
    const publicKey = "ksda-3eTg5R7GxfP4";

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    try {
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log(result.text);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section
      id="CONTACT"
      className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-3xl shadow-xl">
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-5 py-3 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/70 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/70 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            className="w-full px-5 py-3 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/70 transition resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:scale-105 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status message */}
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
    </section>
  );
}

export default Contact;
