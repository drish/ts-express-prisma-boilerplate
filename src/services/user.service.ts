import { User } from "../types/user";

export async function getUser(): Promise<User> {
  const u: User = {
    name: "Derich"
  }
  return u;
}
