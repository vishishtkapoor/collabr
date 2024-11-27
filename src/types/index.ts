export interface User {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  userId: string;
  username: string;
  content: string;
  timestamp: number;
}

export interface Room {
  id: string;
  code: string;
  language: string;
  users: User[];
}