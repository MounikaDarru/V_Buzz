import { useState, useRef } from 'react';
import { useEffect } from 'react';
import interview from '../../../assets/interview.png'

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
    <div className="flex flex-col h-screen p-[50px] md:px-[150px] md:py-[100px] gap-[30px]">
      <h1 className="text-[36px] font-bold">Mock Interview</h1>
      <div className="bg-primary/10 px-[30px] sm:px-[50px] py-[15px] rounded-[20px]">
        <h2 className="text-[16px] sm:text-[24px] font-bold text-primary">Software Engineer</h2>
      </div>

      <div className='flex flex-col lg:flex-row rounded-[20px] bg-white shadow-custom-nav h-[750px] sm:h-[600px] md:h-[500px]'>
        <div className='flex flex-shrink-0 h-[150px] w-full lg:h-full lg:w-[200px] xl:w-[400px] bg-primary/10 rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none items-center justify-center'>
          <img src={interview} className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-full xl:h-full shrink-0 object-cover'/>
        </div>
        <div className='flex flex-col flex-1 min-h-0 p-[30px] sm:px-[50px] sm:py-[30px]'>
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
          <div className="bg-white border-t py-4 sm:p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="hidden md:block bg-blue-500 hover:bg-primary text-white rounded-full px-6 py-2 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;