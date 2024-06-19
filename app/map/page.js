import ButtonCustom from '@/components/Button/ButtonCustom';
import CardBGWhite from '@/components/Card/CardBGWhite';
import React from 'react';
export default function Map() {
    return (
        <div className='h-screen w-screen'>
            {/* map in this  */}
            <div className="inline-flex flex-col absolute bg-[#008938] h-2/3 bottom-0 rounded-t-3xl p-4 w-full">
                <div className="flex w-full justify-between items-center">
                    <div className="text-[14px] text-white flex items-center justify-center">เลือกสาขา</div>
                    <div className="w-[120px] h-[50px] py-[6px] px-[12px]">
                        <ButtonCustom btnText={"สาขาใกล้ฉัน"} textSize="14px" img="" type={"secondary"} />
                    </div>
                </div>
                <div className="flex flex-col overflow-y-auto max-h-[60vh] hide-scrollbar ">
                    <CardBGWhite>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                    </CardBGWhite>
                    <CardBGWhite>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                    </CardBGWhite>
                    <CardBGWhite>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                    </CardBGWhite>

                    <CardBGWhite>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                    </CardBGWhite>
                    <CardBGWhite>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                    </CardBGWhite>
                    <CardBGWhite>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                        <div>asdfasdfasdfsd</div>
                    </CardBGWhite>
                </div>
            </div>
        </div>
    );
}
