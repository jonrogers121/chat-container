import React from 'react'
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TextForm } from "./TextForm";

test("it renders", async () => {
  render(<TextForm dataTestId="TextForm" />);
  expect(screen.getByTestId('TextForm')).toBeInTheDocument()
});
