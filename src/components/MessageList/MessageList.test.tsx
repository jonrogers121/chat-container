import React from "react";
import { render } from "@testing-library/react";
import { MessageList } from "./MessageList";

describe("MessageList component", () => {
  it("renders a list of messages correctly", () => {
    const messages = [
      {
        id: "1",
        text: "Message 1",
        last_updated: "2023-10-20T14:30:00.000Z",
      },
      {
        id: "2",
        text: "Message 2",
        last_updated: "2023-10-21T10:15:00.000Z",
      },
    ];

    const { getAllByTestId } = render(<MessageList messages={messages} />);

    const messageCards = getAllByTestId("message-card");
    expect(messageCards).toHaveLength(messages.length);

    messages.forEach((message, index) => {
      const messageCard = messageCards[index];
      expect(messageCard).toHaveTextContent(message.text);
    });
  });
});
