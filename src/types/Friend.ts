export type FriendState = 'hungry' | 'happy' | 'tired' | 'bored';

export interface FriendData {
  friendName: string;
  friendState: FriendState;
  playCount: number;
  lastInteraction: any; // Firestore Timestamp
  isSetupComplete?: boolean;
}

export interface UserData {
  uid: string;
  email: string;
  friend?: FriendData;
}
