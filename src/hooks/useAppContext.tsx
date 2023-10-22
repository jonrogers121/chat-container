import { useEffect, useState } from "react";
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
  selectedConversation: string;
  selectedMessageThread: Message[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  onSelect: (id: string) => void;
}

const useApp = (): IAppContext => {
  const [conversations, setConversations] = useState<Conversation[]>(data);
  const [selectedConversation, setSelectedConversation] = useState<string>("0");
  const [selectedMessageThread, setSelectedMessageThread] = useState<Message[]>(
    data[0].messages
  );

  function sortByLastUpdatedOldestFirst(messages: Message[]) {
    return messages.sort((a, b) => {
      const dateA = new Date(a.last_updated);
      const dateB = new Date(b.last_updated);

      if (dateA < dateB) {
        return -1;
      } else if (dateA > dateB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  useEffect(() => {
    const selected = conversations[Number(selectedConversation)];
    const sortedSelected = sortByLastUpdatedOldestFirst(
      selected?.messages || []
    );
    setSelectedMessageThread(sortedSelected);
  }, [selectedConversation]);

  const onSelect = (id: string) => {
    setSelectedConversation(id);
  };
  return {
    conversations,
    selectedConversation,
    selectedMessageThread,
    setConversations,
    onSelect,
  } as IAppContext;
};

const [AppProvider, useAppContext] = constate(useApp);
export { AppProvider, useAppContext };
