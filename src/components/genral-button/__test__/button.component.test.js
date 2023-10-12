import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPES } from "../genral-button.component";

describe("Testing button component", () => {
  test("should render the base button when nothing is passed", () => {
    render(<Button />);

    // const ButtonComponent = screen.getByText(/test/i);
    const BaseButtonElement = screen.getByRole("button");
    expect(BaseButtonElement).toHaveStyle("background-color: white");
  });
  test("Should render google button based on given google button type", () => {
    render(<Button btnType={BUTTON_TYPES.google} />);

    const GoogleButtonElement = screen.getByRole("button");
    expect(GoogleButtonElement).toHaveStyle("background-color: #357ae8"); //checked the hover properties
  });
  test("should render the inverted button based on given inverted button type", () => {
    render(<Button btnType={BUTTON_TYPES.inverted} />);
    const InvertedButtonElement = screen.getByRole("button");
    expect(InvertedButtonElement).toHaveStyle("background-color: black");
  });
  test("should be the button disabled while loading is true", () => {
    render(<Button isLoading={true} />);
    const ButtonWhileLoading = screen.getByRole("button");
    expect(ButtonWhileLoading).toBeDisabled();
  });
});
