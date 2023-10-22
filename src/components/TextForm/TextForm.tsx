import React, { useState } from "react";
import { StyledTextFormButton, StyledTextFormInput } from "./TextForm.styles";
import { useAppContext } from "../../hooks/useAppContext";

interface Item {
  id: string;
  text: string;
  last_updated: string;
}

export const TextForm = () => {
  const { setNewMessage } = useAppContext();
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newItem: Item = {
      id: Date.now().toString(),
      text: inputValue,
      last_updated: new Date().toISOString(),
    };
    setNewMessage(newItem);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <StyledTextFormInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <StyledTextFormButton type="submit">Submit</StyledTextFormButton>
      </form>
    </div>
  );
};
