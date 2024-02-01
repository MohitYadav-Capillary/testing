import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Write test case for todo", () => {
  // const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  //check if elements renders and heading, button, input box is present
  test("Elements present in the page", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");
    const headingElement = screen.getByRole("heading");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
  });

  //check if notification is present on click of add todo button
  test("Notification present on click of add todo button", async () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const notificationElement = await screen.findByText("Error");
    expect(notificationElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(buttonElement);
    const notificationElement2 = await screen.findByText("Create Success");
    const todoElement = await screen.findByText("test");
    const deleteButtonElement = await screen.findByTestId("delete-button");
    expect(notificationElement2).toBeInTheDocument();
    expect(todoElement).toBeInTheDocument();
    expect(deleteButtonElement).toBeInTheDocument();
  });

  /*
    
    stimulate add todo
    on success assert on notification and check if inserted data present in ui
    if failure assert failure notification and new row should not be created
    if delete button clicked assert on notification and check if deleted data is not present in ui
  */
});
