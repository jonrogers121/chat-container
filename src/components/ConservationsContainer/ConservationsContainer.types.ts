import { Conversation } from "../../hooks/useAppContext";

export interface IConservationsContainer {
  dataTestId?: string;
  onSelect?: (id: string) => void;
  conversations: Conversation[];
}
