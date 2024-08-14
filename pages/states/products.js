import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (items) => set((state) => (state.products = items)),
}));
