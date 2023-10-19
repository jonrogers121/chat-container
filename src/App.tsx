import React, { useEffect } from "react";
import { useAppContext } from "./hooks/useAppContext";
import "./App.css";

const App = () => {
  const { conversations } = useAppContext();
  useEffect(() => {
    console.log(conversations);
  }, [conversations]);
  return (
    <div className="App">
      <h1>Hello, world!</h1>
    </div>
  );
};

export default App;
