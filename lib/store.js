import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v7 as uuidv7 } from 'uuid';
const useStore = create(
    persist(
        (set, get) => ({
            AllergiesDescription: "",
            setAllergiesDescription: (desc) => set({ AllergiesDescription: desc }),
            Description: "",
            setDescription: (desc) => set({ Description: desc }),
            Cart: [],
            AddCart: () => set((state) => {
                console.log("AddCart", { Cart: [...state.Cart, state.ListOrderDetail] })
                state.ListOrderDetail.ListOrder = { "list": state.DataOrderListConfirm, total: state.ListOrderTotal, AllergiesDescription: state.AllergiesDescription, "Description": state.Description, quantity: state.count }

                const Cart = [...state.Cart, state.ListOrderDetail]
                return { ...state, Cart }
            }),
            BTN_addOrderActive: false,
            ListOrderDetail: "",
            SetListOrderDetail: (data) => set((state) => {
                return { ...state, ListOrderDetail: data }
            }),
            ListOrderTotal: 0,
            SetListOrderAddon: () => set(state => {
                return { ...state };
            }),
            SetListOrderTotal: (price, count) => set(state => {
                console.log("work kkkk ")
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
                const compareAndMark = (subitems, confirmItems) => {
                    const groupedConfirmItems = groupById(confirmItems);

                    return subitems.map(item => {
                        console.log("ii", item.groupid, item.type === "checkbox", item.data)
                        if (item.type === "checkbox" && item.data.length === 0) {
                            console.log("checkboxii", { item })
                            return {
                                groupid: item.groupid,
                                match: false
                            };
                        } else {
                            return {
                                groupid: item.groupid,
                                match: groupedConfirmItems[item.groupid] ? true : false
                            };
                        }
                    });
                };
                const { DataOrderListConfirm } = state
                const sum = DataOrderListConfirm.reduce((acc, current) => {
                    // console.log("lgo", current.type, current.data)
                    if (current.type === "checkbox" && Array.isArray(current.data)) {
                        const subSum = current.data.reduce((subAcc, subCurrent) => {
                            return subAcc + (subCurrent.addon ? subCurrent.price : 0);
                        }, 0);
                        return acc + subSum;
                    } else if (current.type === "radio" && current.data && current.data.addon) {
                        return acc + current.data.price;
                    }
                    return acc;
                }, 0);
                let addOrderActive = false
                if (state.ListOrderDetail.subitem && state.DataOrderListConfirm) {
                    const comparedItems = compareAndMark(state.DataOrderListConfirm, state.ListOrderDetail.subitem);
                    for (let i = 0; i < comparedItems.length; i++) {
                        const value = comparedItems[i]
                        console.log("value", value, i)
                        if (value.match === false) {
                            addOrderActive = false
                            break
                        }
                        if (i == comparedItems.length - 1) {
                            addOrderActive = true
                            console.log("---end---")
                        }
                    }
                }
                return { ...state, BTN_addOrderActive: addOrderActive, ListOrderTotal: (price + sum) * count }
            }),
            CalOrder: (data) => set(state => {
                return { ...state }
            }),
            ClearAllData: () => set(state => ({ ...state, IsLoginApp: false, IsLoading: false, count: 0, PhoneOTPValue: "", PhoneNO: "", UserInfo: {} })),
            IsLoginApp: false,
            setIsLoginApp: (is) => set((state) => ({ ...state, IsLoginApp: is })),
            DataOrderListConfirm: [],
            clearDataOrderListConfirm: () => set((state) => ({ ...state, DataOrderListConfirm: [], Cart: [] })),
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