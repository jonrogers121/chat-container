import { Conversation } from "../../hooks/useAppContext";

export interface IConversationList {
  dataTestId?: string;
  onSelect: (id: string) => void;
  conversations: Conversation[];
}
