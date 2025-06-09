import React, { useState } from "react";
import './App.css'; // Make sure to create this file

function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    // Simulate assistant response
    setTimeout(() => {
      const reply = {
        role: "assistant",
        content: "This is a sample AI response.",
      };
      setMessages((prev) => [...prev, reply]);
    }, 600);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Chat History</h2>
        <button className="new-chat">New Chat</button>
      </aside>

      <main className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.role === "user" ? "user" : "assistant"}`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </main>
    </div>
  );
}

export default App;
