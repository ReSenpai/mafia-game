export interface IAction<T = string> {
  type: T;
  payload: any;
}

export interface IChatMessage {
  id: number;
  avatar: string;
  name: string;
  text: string;
  likes: number;
  dislikes: number;
  messageTime: string | Date;
}
