import { useState, useRef } from 'react';
import { useEffect } from 'react';

const Interview = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Let's begin the mock interview for the Software Engineer position. The question is: Design a real-time notification system for a large-scale application like Twitter or LinkedIn.",
      sender: 'interviewer'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };

    setMessages([...messages, newUserMessage]);
    setInputText('');

    // Simulate interviewer response after a delay
    setTimeout(() => {
      const responseMessage = {
        id: messages.length + 2,
        text: "That's a good start. Can you elaborate on how you would handle scalability when millions of users are receiving notifications simultaneously?",
        sender: 'interviewer'
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1500);
  };

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold text-center">Mock Interview</h1>
        <h2 className="text-lg text-center text-gray-600">Software Engineer</h2>
      </header>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-3/4 rounded-lg p-4 ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 shadow'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="bg-white border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your answer here..."
            className="flex-1 border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Interview;