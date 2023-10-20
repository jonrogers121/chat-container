import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ConversationList } from "./ConversationList";

describe("ConversationList component", () => {
  const conversations = [
    { id: 1, last_updated: "2023-10-15T10:00:00.000Z" },
    { id: 2, last_updated: "2023-10-14T15:30:00.000Z" },
    { id: 3, last_updated: "2023-10-16T08:45:00.000Z" },
  ];

  it("renders a list of conversations", () => {
    const conversations = [
      { id: "1", last_updated: "2023-10-15T10:00:00.000Z" },
      { id: "2", last_updated: "2023-10-14T15:30:00.000Z" },
      { id: "3", last_updated: "2023-10-16T08:45:00.000Z" },
    ];
    const { getAllByTestId } = render(
      <ConversationList conversations={conversations} onSelect={() => {}} />
    );

    const conversationItems = getAllByTestId("conversation-item");
    expect(conversationItems).toHaveLength(conversations.length);

    conversationItems.forEach((item, index) => {
      expect(item).toHaveTextContent(`Conversation ${index + 1}`);
    });
  });

  it("calls onSelect with the correct index when a conversation is clicked", () => {
    const onSelect = jest.fn();
    const conversations = [
      { id: "1", last_updated: "2023-10-15T10:00:00.000Z" },
      { id: "2", last_updated: "2023-10-14T15:30:00.000Z" },
      { id: "3", last_updated: "2023-10-16T08:45:00.000Z" },
    ];
    const { getAllByTestId } = render(
      <ConversationList conversations={conversations} onSelect={onSelect} />
    );

    const conversationItem = getAllByTestId("conversation-item");

    fireEvent.click(conversationItem[0]);

    expect(onSelect).toHaveBeenCalledWith("0");
  });
});
