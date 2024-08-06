import { create } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "./Storages/session.storage";

interface UserData {
  username  : string;
  email: string;
  lastName: string;
  name: string;
  photoSource?: string;
}
interface UserState {
  user: string | null;
  email: string | null;
  lastName: string | null;
  name: string | null;
  photoSource: string | null;
  setUserData: (data: UserData) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      email: null,
      lastName: null,
      name: null,
      photoSource: null,
      setUserData: (obj) =>
        set({
          user: obj.username,
          email: obj.email,
          lastName: obj.lastName,
          name: obj.name,
          photoSource: obj.photoSource
        }),
      clearUserData: () =>
        set({
          user: null,
          email: null,
          lastName: null,
          name: null,
          photoSource: null
        }),
    }),
    { name: "user-storage", storage: customSessionStorage }
  )
);
