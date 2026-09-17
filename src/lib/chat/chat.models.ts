export interface GenericChatMessage {
  id?: string;
  text: string;
  from?: 'me' | 'them';
}
