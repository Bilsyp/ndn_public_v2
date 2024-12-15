import { create } from "zustand";

const useResolutionStore = create((set) => ({
  resolution: "360p", // nilai default
  setResolution: (newResolution) => set({ resolution: newResolution }),
}));

export default useResolutionStore;
