import { useEffect, useState } from "react";
import constate from "constate";

const useApp = () => {
  const [isRayloPay, setIsRayloPay] = useState(false);

  return {
    isRayloPay,
    setIsRayloPay,
  };
};

const [AppProvider, useAppContext] = constate(useApp);
export { AppProvider, useAppContext };
