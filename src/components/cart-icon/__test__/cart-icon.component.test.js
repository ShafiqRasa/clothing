import { screen } from "@testing-library/react";
import { renderWithProviders, store } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon tests", () => {
  test("Use preloaded state to render", () => {
    const initialCartItem = [
      { id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1 },
    ];
    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItem,
          cartCount: 1,
        },
      },
    });

    const CartIconElement = screen.getByText("1");
    expect(CartIconElement).toBeInTheDocument();
  });
});
