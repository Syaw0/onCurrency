import create from "zustand";

export const mainStore = create((set, get) => ({
  data: {},
  setData: (data) => {
    set((s) => ({ ...s, data }));
  },
}));
