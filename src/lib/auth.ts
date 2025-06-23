import { config } from "@/lib/config";

export const isAdmin = (email?: string | null): boolean => {
  return email === config.adminEmail;
};
