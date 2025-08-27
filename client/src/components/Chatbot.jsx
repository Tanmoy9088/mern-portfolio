import React, { useState } from "react";
import { FaComments, FaTimes, FaTrash } from "react-icons/fa";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("https://mern-portfolio-mmpe.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { role: "bot", content: data.reply };
    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  const resetConversation = async () => {
    await fetch("https://mern-portfolio-mmpe.onrender.com/reset", { method: "POST" });
    setMessages([]);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:scale-110 transition z-40"
        >
          <FaComments size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-white shadow-xl rounded-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-yellow-500 text-black p-3 flex justify-between items-center">
            <h2 className="font-bold">Chatbot</h2>
            <div className="flex space-x-2">
              <button onClick={resetConversation}>
                <FaTrash size={18} />
              </button>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-yellow-400 text-black self-end ml-auto"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 bg-yellow-500 rounded-lg text-black font-semibold hover:bg-yellow-400"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
