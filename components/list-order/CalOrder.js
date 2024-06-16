'use client'// CalOrder.js
import React, { useEffect } from 'react';
import store from '@/lib/store';

export default function CalOrder() {
    const { DataOrderListConfirm } = store();
    if(DataOrderListConfirm[0]){
        console.log("have have" , DataOrderListConfirm)
        return (
            <div className='h-[75px] bg-white absolute bottom-0 z-40 w-full p-4'>
                ssssss
            </div>
        );
      
    }else{
        return(<></>)
    }

   
}
