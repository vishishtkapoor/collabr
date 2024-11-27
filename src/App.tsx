import React from 'react';
import { useStore } from './store/useStore';
import { Editor } from './components/Editor';
import { Chat } from './components/Chat';
import { JoinRoom } from './components/JoinRoom';

function App() {
  const { roomId } = useStore();

  if (!roomId) {
    return <JoinRoom />;
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex-1">
        <div className="h-12 bg-gray-800 text-white flex items-center px-4 justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Room ID: {roomId}</span>
          </div>
        </div>
        <div className="h-[calc(100vh-3rem)]">
          <Editor />
        </div>
      </div>
      <div className="w-80 border-l border-gray-700">
        <Chat />
      </div>
    </div>
  );
}

export default App;