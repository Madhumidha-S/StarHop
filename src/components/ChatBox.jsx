import React, { useState } from 'react';
export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });
    const data = await res.json();
    setMessages([...messages, userMessage, { role: "assistant", content: data.reply }]);
  };

  return (
    <div className="bg-indigo-900 p-4 rounded-lg text-white max-w-xl mx-auto">
      <div className="h-60 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-indigo-700 text-right' : 'bg-indigo-600'}`}>{msg.content}</div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-l bg-indigo-800 text-white"
          placeholder="Ask about space..."
        />
        <button onClick={handleSend} className="bg-indigo-700 px-4 rounded-r">Send</button>
      </div>
    </div>
  );
}