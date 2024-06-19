import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const useStore = create(
    persist(
        (set, get) => ({
            ClearAllData : ()=>set(state => ({...state , IsLoginApp : false ,IsLoading: false , count: 0 ,  PhoneOTPValue: "" ,  PhoneNO: "" ,   UserInfo: {}})),
            IsLoginApp: false,
            setIsLoginApp: (is) => set((state) => ({ ...state, IsLoginApp: is })),
            DataOrderListConfirm: [],
            clearDataOrderListConfirm: () => set(() => ({ DataOrderListConfirm: [] })),
            SetDataOrderListConfirmTypeRadio: (value) => set(state => {
                // ตรวจสอบว่ามีวัตถุที่ตรงกับ group และ type "radio" หรือไม่
                const find = state.DataOrderListConfirm.find(v => v.group === value.group && v.type === "radio");
                // อัปเดตวัตถุที่มี group ตรงกัน ถ้ามี ถ้าไม่มี ให้เพิ่มใหม่
                const updatedList = find
                    ? state.DataOrderListConfirm.map(item =>
                        item.group === value.group && item.type === "radio"
                            ? { ...item, ...value }
                            : item
                    )
                    : [...state.DataOrderListConfirm, value];
                return {
                    ...state,
                    DataOrderListConfirm: updatedList
                };
            }),
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
            PhoneNO: "",
            OnChangePhoneNo: (value) => {
                set((state) => ({ ...state, PhoneNO: value }));
            },
            UserInfo: {},
            SetUserInfo: (obj) => set((state) => ({ ...state, UserInfo: { ...state.UserInfo, ...obj } }))
        }),
        {
            name: 'Store', // ชื่อของ item ใน localStorage
            getStorage: () => localStorage, // กำหนดให้ใช้ localStorage
        }
    )
);

export default useStore;