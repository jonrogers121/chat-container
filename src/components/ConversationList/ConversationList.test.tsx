import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ConversationList } from "./ConversationList";

describe("ConversationList component", () => {
  const conversations = [
    { id: 1, last_updated: "2023-10-19T10:00:00" },
    { id: 2, last_updated: "2023-10-19T12:00:00" },
  ];
  const mockOnSelect = jest.fn();

  it("renders a list of conversations", () => {
    const { getByTestId, getAllByTestId } = render(
      <ConversationList conversations={conversations} onSelect={mockOnSelect} />
    );

    const conversationsList = getByTestId("conversation-list");
    expect(conversationsList).toBeInTheDocument();

    const conversationItems = getAllByTestId("conversation-item");
    expect(conversationItems.length).toBe(conversations.length);
  });

  it("calls onSelect when a conversation item is clicked", () => {
    const { getAllByTestId } = render(
      <ConversationList conversations={conversations} onSelect={mockOnSelect} />
    );

    const conversationItems = getAllByTestId("conversation-item");

    fireEvent.click(conversationItems[0]);

    expect(mockOnSelect).toHaveBeenCalledWith(0);
  });
});
