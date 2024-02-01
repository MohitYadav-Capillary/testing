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

  //check if error is present on click of add todo button
  test("Error notification present on click of add todo button with empty input", async () => {
    render(<App />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const notificationElement = await screen.findByText("Error");
    expect(notificationElement).toBeInTheDocument();
  });

  //check if success notification is present on click of add todo button with valid input
  test("Success notification present on click of add todo button with valid input", async () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(buttonElement);
    const notificationElement = await screen.findByText("Create Success");
    expect(notificationElement).toBeInTheDocument();
  });

  //check if todo is present in ui on click of add todo button with valid input
  test("Todo present in ui on click of add todo button with valid input", async () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(buttonElement);
    const todoElement = await screen.findByText("test");
    expect(todoElement).toBeInTheDocument();
  });

  // check if delete button is present in ui after adding todo
  test("Delete button present in ui after adding todo", async () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(buttonElement);
    const deleteButtonElement = await screen.findByTestId("delete-button");
    expect(deleteButtonElement).toBeInTheDocument();
  });

  // check if success notification came on click of delete button and todo is not present in ui
  test("Success notification present on click of delete button and todo is not present in ui", async () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(buttonElement);
    const deleteButtonElement = await screen.findByTestId("delete-button");
    fireEvent.click(deleteButtonElement);
    const notificationElement = await screen.findByText("Delete success");
    expect(notificationElement).toBeInTheDocument();
    const todoElement = screen.queryByText("test");
    expect(todoElement).not.toBeInTheDocument();
  });
});
