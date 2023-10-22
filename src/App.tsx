import React, { useEffect } from "react";
import { useAppContext } from "./hooks/useAppContext";
import "./App.css";
import ChatContainer from "./templates/ChatContainer";

const App = () => {
  const { conversations } = useAppContext();
  useEffect(() => {
    console.log(conversations);
  }, [conversations]);
  return (
    <>
      <ChatContainer />
    </>
  );
};

export default App;
