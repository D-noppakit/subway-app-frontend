// store.js
import create from 'zustand';

const useStore = create((set) => ({
  text: '',
  setText: (newText) => set({ text: newText }),
}));

export default useStore;