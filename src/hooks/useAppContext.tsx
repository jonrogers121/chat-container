import { useState } from "react";
import constate from "constate";
import data from "../data.json";

const useApp = () => {
  const [conversations, setConversations] = useState(data);
  return {
    conversations,
    setConversations,
  };
};

const [AppProvider, useAppContext] = constate(useApp);
export { AppProvider, useAppContext };
