import { create } from "zustand";

const useBufferStore = create((set) => ({
  bufferSize: 1,
  setBufferSize: (size) => set({ bufferSize: size }),
}));

export default useBufferStore;
