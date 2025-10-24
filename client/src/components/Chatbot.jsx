import React, { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaTrash, FaPaperPlane } from "react-icons/fa";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New: Loading state
  const messagesEndRef = useRef(null); // New: Ref for auto-scrolling

  // Auto-scroll effect
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]); // Scroll when messages update or chat opens

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput(""); // Clear input immediately
    setIsLoading(true); // Start loading

    try {
      const res = await fetch("https://mern-portfolio-mmpe.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });
      
      if (!res.ok) {
        throw new Error(`API returned status ${res.status}`);
      }

      const data = await res.json();
      const botMsg = { role: "bot", content: data.reply || "I didn't get a clear response." };
      setMessages((prev) => [...prev, botMsg]);

    } catch (error) {
      console.error("Chatbot API failed:", error);
      setMessages((prev) => [...prev, { role: "system", content: "Error: Failed to connect or receive a reply." }]);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const resetConversation = async () => {
    try {
      // Assuming DELETE is the appropriate REST method for a reset action
      const res = await fetch("https://mern-portfolio-mmpe.onrender.com/chat", { method: "DELETE" });
      if (res.ok) {
        setMessages([]);
      } else {
         console.warn("Backend reset failed, clearing frontend only.");
         setMessages([]);
      }
    } catch (error) {
       console.error("Failed to call backend reset:", error);
       setMessages([]);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-10 right-10 bg-orange-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-40"
        >
          <FaComments size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1a0f3d] text-white p-3 flex justify-between items-center shadow-md">
            <h2 className="font-bold">AI Task Assistant</h2>
            <div className="flex space-x-2">
              <button 
                onClick={resetConversation}
                className="p-1 rounded-full hover:bg-white/20 transition"
              >
                <FaTrash size={16} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition"
              >
                <FaTimes size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50 flex flex-col">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[90%] break-words shadow-sm ${
                  msg.role === "user"
                    ? "bg-cyan-500 text-white self-end ml-auto rounded-br-none"
                    : msg.role === "bot"
                    ? "bg-gray-200 text-gray-800 self-start rounded-tl-none"
                    : "bg-red-100 text-red-600 text-center self-center w-full"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {/* Loading Indicator */}
            {isLoading && (
              <div className="bg-gray-200 text-gray-600 p-2 rounded-xl self-start max-w-[80%] animate-pulse">
                Assistant is typing...
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Scroll target */}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={isLoading ? "Please wait..." : "Type a message..."}
              className="flex-1 p-2 border rounded-l-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className="ml-0 px-4 py-2 bg-cyan-500 rounded-r-lg text-white font-semibold hover:bg-cyan-600 transition disabled:bg-gray-400"
              disabled={isLoading || !input.trim()}
            >
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;