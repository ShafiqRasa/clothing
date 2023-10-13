import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import Navigation from "../navigation.route";

describe("Navigation test", () => {
  test("It should render a Sign In link if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    const NavigationElement = screen.getByText(/SIGN IN/i);
    expect(NavigationElement).toBeInTheDocument();
  });

  test("It should not render Sign In if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const NavigationElement = screen.queryByText("SIGN IN");
    expect(NavigationElement).toBeNull();
  });

  test("It should render Sign Out if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const NavigationElement = screen.getByText(/SIGN OUT/i);
    expect(NavigationElement).toBeInTheDocument();
  });

  test("It should render cart dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isOpen: true,
          cartItems: [],
        },
      },
    });

    expect(screen.getByText("Your cart is empty!")).toBeInTheDocument();
  });

  // test('It should dispatch signOutStart action when clicking on the Sign Out link', async () => {
  //   const mockDispatch = jest.fn();
  //   jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

  //   renderWithProviders(<Navigation />, {
  //     preloadedState: {
  //       user: {
  //         currentUser: {},
  //       },
  //     },
  //   });

  //   expect(screen.getByText('SIGN OUT')).toBeInTheDocument();

  //   await fireEvent.click(screen.getByText('SIGN OUT'));

  //   expect(mockDispatch).toHaveBeenCalled();
  //   expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

  //   mockDispatch.mockClear();
  // });
});
