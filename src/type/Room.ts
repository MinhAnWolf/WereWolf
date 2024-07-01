export interface Room {
  roomId?: string;
  roomName?: string;
  userid?: [string];
  roomOwner?: string;
  slot?: number;
  type?: string;
  status?: string;
  clock?: boolean;
  password?: string;
  stage?: string; // wait - start - morning - night
}
