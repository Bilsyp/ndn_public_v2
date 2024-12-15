import { create } from "zustand";

const useNetworkStore = create((set) => ({
  // State
  networkType: "", // Menyimpan value yang dipilih (ipv4 atau ndn)

  // Actions
  setNetworkType: (type) => set({ networkType: type }),
  resetNetworkType: () => set({ networkType: "" }),
}));

export default useNetworkStore;
