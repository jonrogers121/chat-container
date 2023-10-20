import { useState } from "react";
import constate from "constate";
import data from "../data.json";

interface Message {
  id?: string;
  text: string;
  last_updated: string;
}

export interface Conversation {
  id: string;
  name?: string;
  last_updated: string;
  messages?: Message[];
}

interface IAppContext {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
}

const useApp = (): IAppContext => {
  const [conversations, setConversations] = useState<Conversation[]>(data);
  return {
    conversations,
    setConversations,
  };
};

const [AppProvider, useAppContext] = constate(useApp);
export { AppProvider, useAppContext };
