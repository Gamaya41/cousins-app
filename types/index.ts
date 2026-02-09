export interface User {
  id: string;
  name: string;
  coins: number;
  role: 'admin' | 'client' | 'staff';
}

export interface KaraokeEntry {
  id: string;
  songName: string;
  score: number;
  userName: string;
}