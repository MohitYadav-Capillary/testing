import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("Stimulate login flow", () => {
  // Check for input fields and button presence in the UI
  test("renders login form", () => {
    render(<App />);
    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button");
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  // Fill in the username and password fields
  test("fill in username and password", async () => {
    render(<App />);
    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);
    fireEvent.change(username, { target: { value: "testuser" } });
    fireEvent.change(password, { target: { value: "testpassword" } });
    await waitFor(() => {
      expect(username.value).toBe("testuser");
      expect(password.value).toBe("testpassword");
    });
  });

  // click the submit button
  test("click the submit button", async () => {
    const onSubmit = jest.fn();
    render(<App onSubmit={onSubmit} />);
    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);
    fireEvent.change(username, { target: { value: "testuser" } });
    fireEvent.change(password, { target: { value: "testpassword" } });
    const submit = screen.getByRole("button");
    fireEvent.click(submit);
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  /*
   TODO:
    1. Fill in the username and password fields getByLabelText
    2. type user name and password - fireEvent.change or userEvent.type
    3. find the submit button - getByRole/findByRole
    4. click the submit button - fireEvent.click or userEvent.click
    5. add a assertion to check if submitted data is correct
    6. mock onSubmit function to the App component and check if its getting called with correct username and password
  */
});
