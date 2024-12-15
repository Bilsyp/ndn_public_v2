import { create } from "zustand";

const useAbrStore = create((set) => ({
  // State
  abrType: "", // Menyimpan value yang dipilih (ipv4 atau ndn)

  // Actions
  setAbrType: (type) => set({ abrType: type }),
  resetAbrType: () => set({ abrType: "" }),
}));

export default useAbrStore;
