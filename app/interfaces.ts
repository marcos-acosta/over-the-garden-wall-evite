export interface Attendee {
  name: string;
  timestamp: number;
}

export interface Doot {
  dooter: string;
  timestamp: number;
  ignoreInLeaderboard?: boolean;
}
