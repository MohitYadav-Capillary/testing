import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Test counter App", () => {
  // assert if initial count value is 0 on render
  test("initial count value is 0", () => {
    render(<App />);

    const countValue = screen.getByText(/counter value is 0/i);
    expect(countValue).toBeInTheDocument();
  });

  // // assert if increment button is present
  test("increment button is present", () => {
    render(<App />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    expect(incrementButton).toBeInTheDocument();
  });

  // // assert if decrement button is present
  test("decrement button is present", () => {
    render(<App />);
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    expect(decrementButton).toBeInTheDocument();
  });

  // click increment and decrement buttons and check assertions

  test("increment and decrement button clicked", () => {
    render(<App />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/counter value is 2/i)).toBeInTheDocument();
    fireEvent.click(decrementButton);
    expect(screen.getByText(/counter value is 1/i)).toBeInTheDocument();
    fireEvent.click(decrementButton);
    expect(screen.getByText(/counter value is 0/i)).toBeInTheDocument();
    fireEvent.click(decrementButton);
    expect(screen.getByText(/counter value is 0/i)).toBeInTheDocument();
  });

  //Two button in the UI
  test("There are two buttons in the UI", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });

  /*
  TODO:
    hints:
    for getting dom elements use getBy/queryBy from screen
    use getByRole/findByRole query to find 'increment' button
    use fireevent or user event to click
    make assertions using expect with screen.getBy or queryBy
    repeat the above steps dependent on test case requirement in todo
  */
});
