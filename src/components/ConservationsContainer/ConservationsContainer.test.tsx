import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Conversation, useAppContext } from "../../hooks/useAppContext";
import { ConservationsContainer } from "./ConservationsContainer";

jest.mock("../../hooks/useAppContext");

describe("ConservationsContainer component", () => {
  it("renders the container with conversation list", () => {
    const mockConversations = [
      {
        id: 1,
        name: "Conversation 1",
        last_updated: "2023-10-19T10:00:00",
      },
      {
        id: 2,
        name: "Conversation 2",
        last_updated: "2023-10-19T12:00:00",
      },
    ];
    const mockOnSelect = jest.fn();

    const newMockConversations = [
      {
        id: "1",
        name: "Conversation 1",
        last_updated: "2023-10-19T10:00:00",
      },
      {
        id: "2",
        name: "Conversation 2",
        last_updated: "2023-10-19T12:00:00",
      },
    ];

    (
      useAppContext as jest.MockedFunction<typeof useAppContext>
    ).mockReturnValue({
      conversations: newMockConversations,
      setConversations: function (
        value: React.SetStateAction<Conversation[]>
      ): void {
        throw new Error("Function not implemented.");
      },
    });

    const { getByTestId } = render(
      <ConservationsContainer
        dataTestId="conservations-container"
        onSelect={mockOnSelect}
        conversations={[]}
      />
    );

    const container = getByTestId("conservations-container");
    expect(container).toBeInTheDocument();

    const conversationList = getByTestId("conversation-list");
    expect(conversationList).toBeInTheDocument();
  });
});
