import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const useStore = create(
    persist(
        (set, get) => ({
            IsLoading: false,
            setLoading: (is) => set((state) => ({ ...state, IsLoading: is })),
            count: 0,
            increaseCount: () => set((state) => ({ count: state.count + 1 })),
            resetCount: () => set({ count: 0 }),
            decreaseCount: () => set((state) => ({ count: state.count - 1 })),
            PhoneOTPValue: "",
            OnChangePhoneOTPValue: (e) => {
                set((state) => ({ ...state, PhoneOTPValue: e.target.value }));
            },
            SendOTP: () => {
                const { PhoneOTPValue } = get()
                console.log(PhoneOTPValue)
            },
            GetHello: () => {
                console.log("hello")
            }
        }),

        {
            name: 'Store', // ชื่อของ item ใน localStorage
            getStorage: () => localStorage, // กำหนดให้ใช้ localStorage
        }
    )
);

export default useStore;