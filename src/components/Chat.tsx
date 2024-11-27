import { useState } from 'react';
import { Send } from 'lucide-react';
import { useStore } from '../store/useStore';
import { nanoid } from 'nanoid';

export function Chat() {
  const [message, setMessage] = useState('');
  const { messages, addMessage, currentUser } = useStore();

  const sendMessage = () => {
    if (!message.trim() || !currentUser) return;

    const newMessage = {
      id: nanoid(),
      userId: currentUser.id,
      username: currentUser.name,
      content: message,
      timestamp: Date.now(),
    };

    addMessage(newMessage);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.userId === currentUser?.id ? 'items-end' : 'items-start'
            }`}
          >
            <span className="text-xs text-gray-400">{msg.username}</span>
            <div className={`mt-1 px-4 py-2 rounded-lg ${
              msg.userId === currentUser?.id
                ? 'bg-blue-600'
                : 'bg-gray-700'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}