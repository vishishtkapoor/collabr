import { useState } from 'react';
import { useStore } from '../store/useStore';
import { nanoid } from 'nanoid';

export function JoinRoom() {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const { setCurrentUser, setRoomId: setStoreRoomId } = useStore();

  const createRoom = () => {
    if (!username) return;
    const newRoomId = nanoid(10);
    const user = { id: nanoid(), name: username };
    setCurrentUser(user);
    setStoreRoomId(newRoomId);
  };

  const joinRoom = () => {
    if (!username || !roomId) return;
    const user = { id: nanoid(), name: username };
    setCurrentUser(user);
    setStoreRoomId(roomId);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Join Collaborative Editor
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter room ID (optional)"
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-4">
            <button
              onClick={createRoom}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors"
            >
              Create Room
            </button>
            <button
              onClick={joinRoom}
              disabled={!roomId}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}