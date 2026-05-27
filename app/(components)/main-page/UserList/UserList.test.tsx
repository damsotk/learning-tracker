import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserList from "./UserList";
import { UserPublic } from "@/types/user";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

vi.mock("../../reusable/ProgressCircle/ProgressCircle", () => ({
  default: ({ topic }: { topic: string }) => (
    <div data-testid={`progress-${topic}`} />
  ),
}));

vi.mock("./user-list.module.css", () => ({ default: {} }));

vi.mock("@/utils/formatDate", () => ({
  formatDate: () => "01.01.2025",
}));

const mockUser: UserPublic = {
  id: 1,
  name: "Denis",
  nickname: "denis_dev",
  updatedAt: new Date("2025-01-01"),
  progress: {
    javascript: { learned: 10, total: 20 },
    react: { learned: 5, total: 10 },
    browser: { learned: 3, total: 8 },
  },
};

describe("UserList", () => {
  describe("when users is empty", () => {
    it("shows empty state", () => {
      render(<UserList users={[]} />);
      expect(screen.getByText("No users yet")).toBeInTheDocument();
      expect(screen.getByText(/When users appear/i)).toBeInTheDocument();
    });

    it("does not show the list of users", () => {
      render(<UserList users={[]} />);
      expect(screen.queryByRole("article")).not.toBeInTheDocument();
    });
  });

  describe("when users is not empt", () => {
    it("renders user card correctly", () => {
      render(<UserList users={[mockUser]} />);
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("Denis")).toBeInTheDocument();
      expect(screen.getByText("D")).toBeInTheDocument();
    });

    it("link route to correct profile", () => {
      render(<UserList users={[mockUser]} />);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/u/denis_dev");
    });

    it("rendered three ProgressCircle components", () => {
      render(<UserList users={[mockUser]} />);
      expect(screen.getByTestId("progress-JavaScript")).toBeInTheDocument();
      expect(screen.getByTestId("progress-React")).toBeInTheDocument();
      expect(screen.getByTestId("progress-Browser & Web")).toBeInTheDocument();
    });

    it("rendered correct number of cards for several of users", () => {
      const users = [
        mockUser,
        {
          ...mockUser,
          id: 2,
          name: "Maxim",
          nickname: "nebela",
        },
      ];
      render(<UserList users={users} />);
      expect(screen.getAllByRole("article")).toHaveLength(2);
    });
  });
});
