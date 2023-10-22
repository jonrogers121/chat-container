import React from "react";
import { render } from "@testing-library/react";
import { MessageCard } from "./MessageCard";

describe("MessageCard component", () => {
  it("renders the message text and formatted date correctly", () => {
    const text = "Hello, this is a test message.";
    const last_updated = "2023-10-20T14:30:00.000Z";

    const { getByText } = render(
      <MessageCard text={text} last_updated={last_updated} />
    );

    const formattedDate = getByText("10/20/2023, 7:30:00 AM");
    expect(formattedDate).toBeInTheDocument();

    const messageText = getByText(text);
    expect(messageText).toBeInTheDocument();
  });
});
