import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TextForm } from "./TextForm";

describe("TextForm Component", () => {
  it("should render without errors", () => {
    const { getByPlaceholderText, getByText } = render(<TextForm />);

    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("should update input value on user input", () => {
    const { getByPlaceholderText } = render(<TextForm />);
    const inputElement = getByPlaceholderText("Enter text");

    fireEvent.change(inputElement, { target: { value: "Test Input" } });

    expect(inputElement.value).toBe("Test Input");
  });
});
