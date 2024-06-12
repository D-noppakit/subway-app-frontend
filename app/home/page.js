
import ContainerListItem from "@/components/ContainerListItem/ContainerListItem";
import Image from "next/image";


export default function Home2() {

   let listdata = [
      {
         sku: "001",
         title: `(6" นิ้ว) Cheese & Egg`,
         des: `แซนด์วิชชีสและไข่ ขนาด 6 นิ้ว (เมนูนี้มีชีสตาม สูตร หากแพ้ชีสโปรดแจ้ง)`,
         price: 89,
         fullPrice: 89
      },
      {
         sku: "001",
         title: `(6" นิ้ว) Cheese & Egg`,
         des: `แซนด์วิชชีสและไข่ ขนาด 6 นิ้ว (เมนูนี้มีชีสตาม สูตร หากแพ้ชีสโปรดแจ้ง)`,
         price: 89,
         fullPrice: 89
      }
   ]

   return (
      <div>
         <ContainerListItem listData={listdata}/>
      </div>
   );
}
