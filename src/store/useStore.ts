import { create } from 'zustand';
import { Message, User } from '../types';

interface EditorStore {
  code: string;
  language: string;
  roomId: string | null;
  users: User[];
  messages: Message[];
  currentUser: User | null;
  setCode: (code: string) => void;
  setLanguage: (language: string) => void;
  setRoomId: (roomId: string) => void;
  setUsers: (users: User[]) => void;
  addMessage: (message: Message) => void;
  setCurrentUser: (user: User) => void;
}

export const useStore = create<EditorStore>((set) => ({
  code: '',
  language: 'javascript',
  roomId: null,
  users: [],
  messages: [],
  currentUser: null,
  setCode: (code) => set({ code }),
  setLanguage: (language) => set({ language }),
  setRoomId: (roomId) => set({ roomId }),
  setUsers: (users) => set({ users }),
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  setCurrentUser: (user) => set({ currentUser: user }),
}));