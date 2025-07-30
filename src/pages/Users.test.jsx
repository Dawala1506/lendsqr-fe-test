import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UsersPage from "./Users";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "./MockApiData";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe("UsersPage Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
    localStorage.setItem.mockClear();
    mockNavigate.mockClear();
  });

  const renderUsersPage = () => {
    return render(<UsersPage />);
  };

  describe("Positive Scenarios", () => {
    test("renders without crashing", () => {
      renderUsersPage();
      expect(screen.getByText("Users")).toBeInTheDocument();
    });

    test("displays all stat cards correctly", () => {
      renderUsersPage();

      expect(screen.getByText("USERS")).toBeInTheDocument();
      expect(screen.getByText("2,453")).toBeInTheDocument();
      expect(screen.getByText("ACTIVE USERS")).toBeInTheDocument();
    });

    test("renders user table with correct headers", () => {
      renderUsersPage();

      expect(
        screen.getByRole("columnheader", { name: /organization/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("columnheader", { name: /username/i })
      ).toBeInTheDocument();
    });

    test("displays mock users data in the table", () => {
      renderUsersPage();

      expect(screen.getByText(mockUsers[0].organization)).toBeInTheDocument();
      expect(screen.getByText(mockUsers[0].username)).toBeInTheDocument();
    });

    test("pagination works correctly", () => {
      renderUsersPage();

      const itemsSelect = screen.getByRole("combobox");
      fireEvent.change(itemsSelect, { target: { value: "5" } });

      expect(itemsSelect).toHaveValue("5");
    });

    test("filter panel appears when filter icon is clicked", () => {
      renderUsersPage();

      const filterIcons = screen.getAllByRole("button", { name: /filter/i });
      fireEvent.click(filterIcons[0]);

      expect(screen.getByLabelText("Organization")).toBeInTheDocument();
    });

    test("view details action navigates to user details page", async () => {
      renderUsersPage();

      const actionButtons = screen.getAllByRole("button", {
        name: /more options/i,
      });
      fireEvent.click(actionButtons[0]);

      const viewDetailsButton = await screen.findByText("View Details");
      fireEvent.click(viewDetailsButton);

      expect(mockNavigate).toHaveBeenCalledWith(`/users/${mockUsers[0].id}`);
    });

    test("applies filters correctly", async () => {
      renderUsersPage();

      const filterIcons = screen.getAllByRole("button", { name: /filter/i });
      fireEvent.click(filterIcons[0]);

      const usernameInput = screen.getByPlaceholderText("User");
      fireEvent.change(usernameInput, {
        target: { value: mockUsers[0].username },
      });

      const filterButton = screen.getByRole("button", { name: /filter/i });
      fireEvent.click(filterButton);

      await waitFor(() => {
        expect(screen.getByText(mockUsers[0].username)).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(
          screen.queryByText(mockUsers[1].username)
        ).not.toBeInTheDocument();
      });
    });

    test("resets filters correctly", async () => {
      renderUsersPage();

      const filterIcons = screen.getAllByRole("button", { name: /filter/i });
      fireEvent.click(filterIcons[0]);

      const usernameInput = screen.getByPlaceholderText("User");
      fireEvent.change(usernameInput, {
        target: { value: mockUsers[0].username },
      });

      const filterButton = screen.getByRole("button", { name: /filter/i });
      fireEvent.click(filterButton);

      fireEvent.click(filterIcons[0]);

      const resetButton = screen.getByRole("button", { name: /reset/i });
      fireEvent.click(resetButton);

      // Check first user is visible again
      await waitFor(() => {
        expect(screen.getByText(mockUsers[0].username)).toBeInTheDocument();
      });
    });
  });

  describe("Negative Scenarios", () => {
    test("handles empty user data gracefully", () => {
      jest.mock("./MockApiData", () => ({
        mockUsers: [],
      }));

      renderUsersPage();

      expect(screen.getByText(/No users found/i)).toBeInTheDocument();
    });

    test("filter with non-existent value shows no results", async () => {
      renderUsersPage();

      const filterIcons = screen.getAllByRole("button", { name: /filter/i });
      fireEvent.click(filterIcons[0]);

      const usernameInput = screen.getByPlaceholderText("User");
      fireEvent.change(usernameInput, {
        target: { value: "non-existent-user" },
      });

      const filterButton = screen.getByRole("button", { name: /filter/i });
      fireEvent.click(filterButton);

      await waitFor(() => {
        expect(
          screen.getByText(/No users match the filter criteria/i)
        ).toBeInTheDocument();
      });
    });

    test("pagination buttons are disabled appropriately", () => {
      renderUsersPage();

      const prevButton = screen.getByRole("button", { name: /previous page/i });
      expect(prevButton).toBeDisabled();

      const itemsSelect = screen.getByRole("combobox");
      fireEvent.change(itemsSelect, { target: { value: "100" } });

      const nextButton = screen.getByRole("button", { name: /next page/i });
      expect(nextButton).toBeDisabled();
    });

    test("action dropdown closes when clicking outside", async () => {
      renderUsersPage();

      const actionButtons = screen.getAllByRole("button", {
        name: /more options/i,
      });
      fireEvent.click(actionButtons[0]);

      await screen.findByText("View Details");

      fireEvent.click(document.body);

      await waitFor(() => {
        expect(screen.queryByText("View Details")).not.toBeInTheDocument();
      });
    });

    test("multiple filter panels do not open simultaneously", async () => {
      renderUsersPage();

      const filterIcons = screen.getAllByRole("button", { name: /filter/i });
      fireEvent.click(filterIcons[0]);

      await screen.findByLabelText("Organization");

      fireEvent.click(filterIcons[1]);

      await waitFor(() => {
        expect(screen.queryByLabelText("Organization")).not.toBeInTheDocument();
      });

      expect(screen.getByPlaceholderText("User")).toBeInTheDocument();
    });
  });
});
