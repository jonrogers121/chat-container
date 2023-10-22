import React from "react";
import { render } from "@testing-library/react";
import { ChatContainer } from "./ChatContainer";

jest.mock("../../hooks/useAppContext", () => ({
  useAppContext: jest.fn(() => ({
    conversations: [],
    onSelect: jest.fn(),
    selectedMessageThread: [],
  })),
}));

describe("ChatContainer Component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(
      <ChatContainer dataTestId="chat-container" />
    );
    expect(getByTestId("chat-container")).toBeInTheDocument();
  });
});
