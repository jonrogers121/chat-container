import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for jest-dom matchers
import { ChatContainer } from "./ChatContainer"; // Import your component

describe("ChatContainer component", () => {
  it("renders the container with subcomponents", () => {
    const { getByTestId } = render(
      <ChatContainer dataTestId="chat-container" />
    );

    const container = getByTestId("chat-container");
    expect(container).toBeInTheDocument();

    const leftColumn = getByTestId("left-column");
    expect(leftColumn).toBeInTheDocument();

    const rightColumn = getByTestId("right-column");
    expect(rightColumn).toBeInTheDocument();

    const topSection = getByTestId("top-section");
    expect(topSection).toBeInTheDocument();

    const bottomSection = getByTestId("bottom-section");
    expect(bottomSection).toBeInTheDocument();
  });
});
