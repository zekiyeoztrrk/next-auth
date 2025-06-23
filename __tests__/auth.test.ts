import { isAdmin } from "@/lib/auth";
import { config } from "@/lib/config";

describe("isAdmin", () => {
  it("should return true for admin email", () => {
    expect(isAdmin(config.adminEmail)).toBe(true); 
  });

  it("should return false for non-admin email", () => {
    expect(isAdmin("user@example.com")).toBe(false);
  });
});
