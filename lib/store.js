import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const useStore = create(
    persist(
        (set, get) => ({
            ListOrderDetail: "",
            SetListOrderDetail: (data) => set((state) => {
                const groupById = (array) => {
                    return array.reduce((result, current) => {
                        const group = current.groupid;

                        if (!result[group]) {
                            result[group] = [];
                        }

                        result[group].push(current);
                        return result;
                    }, {});
                };
                const groupedData = groupById(data.subitem);

                console.log(groupedData);
                return { ...state, ListOrderDetail: data }
            }),
            ListOrderTotal: 0,
            SetListOrderAddon: () => set(state => {
                return { ...state };
            }),
            SetListOrderTotal: (price, count) => set(state => {
                const { DataOrderListConfirm } = state
                const sum = DataOrderListConfirm.reduce((acc, current) => {
                    console.log("lgo", current.type, current.data)
                    if (current.type === "checkbox" && Array.isArray(current.data)) {
                        const subSum = current.data.reduce((subAcc, subCurrent) => {
                            return subAcc + (subCurrent.addon ? subCurrent.price : 0);
                        }, 0);
                        return acc + subSum;
                    } else if (current.type === "radio" && current.data && current.data.addon) {
                        // console.log("cdp , ", current.data.price)
                        return acc + current.data.price;
                    }
                    return acc;
                }, 0);
              
                return { ...state, ListOrderTotal: (price + sum) * count }
            }),
            CalOrder: (data) => set(state => {
                return { ...state }
            }),
            ClearAllData: () => set(state => ({ ...state, IsLoginApp: false, IsLoading: false, count: 0, PhoneOTPValue: "", PhoneNO: "", UserInfo: {} })),
            IsLoginApp: false,
            setIsLoginApp: (is) => set((state) => ({ ...state, IsLoginApp: is })),
            DataOrderListConfirm: [],
            clearDataOrderListConfirm: () => set(() => ({ DataOrderListConfirm: [] })),
            SetDataOrderListConfirmTypeRadio: (value) => set(state => {
                // ตรวจสอบว่ามีวัตถุที่ตรงกับ group และ type "radio" หรือไม่
                const find = state.DataOrderListConfirm.find(v => v.groupid === value.groupid && v.type === "radio");
                // อัปเดตวัตถุที่มี group ตรงกัน ถ้ามี ถ้าไม่มี ให้เพิ่มใหม่
                const updatedList = find
                    ? state.DataOrderListConfirm.map(item =>
                        item.groupid === value.groupid && item.type === "radio"
                            ? { ...item, ...value }
                            : item
                    )
                    : [...state.DataOrderListConfirm, value];
                return {
                    ...state,
                    DataOrderListConfirm: updatedList
                };
            }),
            SetDataOrderListConfirmTypeCheck: (value) => set(state => {
                // ตรวจสอบว่ามีวัตถุที่ตรงกับ group และ type "checkbox" หรือไม่
                const checkIsArray = state.DataOrderListConfirm.find((e) => e.type === 'checkbox' && e.groupid === value.groupid)
                if (checkIsArray) {
                    const updatedDataOrderListConfirm = state.DataOrderListConfirm.map(group => {
                        if (group.groupid === value.groupid) {
                            return value;
                        } else {
                            return group;
                        }
                    });
                    return {
                        ...state,
                        DataOrderListConfirm: updatedDataOrderListConfirm
                    };
                } else {
                    return {
                        ...state,
                        DataOrderListConfirm: [...state.DataOrderListConfirm, ...[value]]
                    };
                }
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