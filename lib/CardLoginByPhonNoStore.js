import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
    persist(
        (set) => ({
            inputValue: "",
            OnChangeValue: (e) => {
                console.log("set is called");
                // console.log(e);
                set((state) => ({ ...state, inputValue: e.target.value }));
            }
        }),
        {
            name: 'Store',
            getStorage: () => localStorage
        }
    )
);

export default useStore;
