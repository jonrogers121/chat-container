import { Conversation } from "../../hooks/useAppContext";

export interface IConservationsContainer {
  dataTestId?: string;
  conversations: Conversation[];
}
