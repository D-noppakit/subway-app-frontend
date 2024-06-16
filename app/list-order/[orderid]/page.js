"use server"
import DeliciousRecipe from "@/components/list-order/DeliciousRecipe";
import ListOrderHeader from "@/components/list-order/ListOrderHeader";
import ListOrderSelection from "@/components/list-order/ListOrderSelection";
import CalOrder from "@/components/list-order/CalOrder";

const datamock = [
    { id: 1, name: "a" , group: "A"  }, { id: 2, name: "b"  , group: "A"  }, { id: 3, name: "c"  , group: "A"  }
]
const datamock2 = [
    { id: 1, name: "a" , group: "B"  }, { id: 2, name: "b"  , group: "B"  }, { id: 3, name: "c"  , group: "B"  }
]
const datamock3 = [
    { id: 1, name: "a" , group: "C"  }, { id: 2, name: "C"  , group: "C"  }, { id: 3, name: "c"  , group: "C"  }
]
export default async function ListOrderPage({ params }) {
    // useEffect(() => {
    //     store.set((state) => ({ ...state, DataOrderListConfirm: [] }));
    // }, []);
    const { type } = params

    return (
        <div className="h-screen  flex flex-col">
            <ListOrderHeader />
            <div className="flex-1 w-full bg-[#008938] ">
                <div className="px-[20px] pb-[20px] pt-3 gap-1 flex flex-col h-full mb-16">
                    <div className="text-white text-16px p-[10px]">เลือกส่วนประกอบ</div>
                    <DeliciousRecipe />
                    <ListOrderSelection num={1} data={datamock} />
                    <ListOrderSelection num={2} data={datamock2} />
                    <ListOrderSelection num={3} data={datamock3} />
                </div>
              
            </div>
            <CalOrder />
        </div>

    )
}
