"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton';
import HeaderOne from "@/components/HeaderOne";
import SideNavBar from "@/components/HomeComponents/SideNavBar";
import Subwaytextbox from "@/components/Subwaytextbox";
import IconSearch from "@/public/icon/IconSearch.png";
import IconFavorite from "@/public/icon/IconFavorite.png";
import LocationAt from "@/components/HomeComponents/LocationAt";
import CardSquare from "@/components/Card/CardSquare";
import CardListItem from "@/components/Card/CardListItem";
import TittleHeader from "@/components/HomeComponents/TittleHeader";
import store from "@/lib/store";
import Removecrosspluscircle from "@/public/icon/removecrosspluscircle.png";
import CloseGreen from "@/public/icon/Close-green.png";
import PickUpAt from "@/components/PickUpAt";
import { modalLocation } from "@/hooks/openModal";
const fetcher = (url) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ "shopcode": "S001" }),
}).then(res => res.json());

export default function Page({ params }) {
  const { position } = params
  const { clearDataOrderListConfirm } = store();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isOpenBulgur, setIsOpenBulgur] = useState(false);
  const [selectOption, setSelectOption] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [isSeach, setIsSeach] = useState(false);
  const [searchText, setSeachText] = useState('')
  const { data: dataPromohot } = useSWR(
    'http://localhost:3003/api/v1/product/byshop/getList',
    fetcher
  );

  const modal = modalLocation()

  const toggleClass = () => {
    setIsSeach(!isSeach);
  }

  useEffect(() => {
    clearDataOrderListConfirm();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 100;
      setIsScrolledDown(scrolledDown);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };


  }, []);

  useEffect(() => {
    if (dataPromohot) {
      const newOptions = dataPromohot.result.map((e, index) => ({
        id: index,
        value: e.container_name_th
      }));
      setSelectOption(newOptions);
      if (position != 'top' && !isNaN(position) && parseInt(position) < newOptions.length) {
        setSelectedValue(dataPromohot.result[position].container_name_th);
        const selectedSection = document.getElementById('div' + position);
        selectedSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const handleScroll = () => {
        const options = document.querySelectorAll('[id^="div"]');
        let nearestIndex = -1;
        let nearestDistance = Number.MAX_VALUE;

        options.forEach((option, index) => {
          const position = option.getBoundingClientRect().top;
          const distance = Math.abs(position);

          if (distance < nearestDistance && position < window.innerHeight && position >= 0) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        if (nearestIndex !== -1) {
          setSelectedValue(dataPromohot.result[nearestIndex].container_name_th);
        }
      };

      document.body.addEventListener('scroll', handleScroll);

      return () => {
        document.body.removeEventListener('scroll', handleScroll);
      };
    }
  }, [dataPromohot]);

  const handleSelectChange = (event) => {
    const selectedSectionold = event.target.value;
    const index = selectOption.findIndex((e) => e.value === selectedSectionold);
    const selectedSection = document.getElementById('div' + index);
    selectedSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const ClickBulgur = (state) => {
    setIsOpenBulgur(state);
  };

  const handleChangeTextSearch = (event) => {
    console.log(event.target.value)

    setSeachText(event.target.value)

  };

  const clearTextFunc = () => {
    setSeachText('')
  }

  const handleClearText = () => {
    setIsSeach(!isSeach);
    setSeachText('')
  }

  return (
    <div className="">
      {modal.isOpenModalLocation && <PickUpAt setIsOpenModalLocation={modal.toggle}/> }       
      <HeaderOne CartCount={0} whenClickBulgur={ClickBulgur} />
      <div style={{ height: "fit-content" }}>
        <main className={`w-full h-[139px] bg-[#0b8a45] relative`}>
          <div className="relative ">
            <LocationAt NameLocation={"Subway CW Tower"} Time={"ทันที"} whenClick={modal.toggle} />
          </div>
          <div className="sm:top-[-6vh] md:top-[-6vh] top-[-8vh] absolute z-0 h-[200px]" style={{ objectFit: "contain", overflow: "hidden" }}>
            <Image src={"/imgs/bg-select-top.png"} alt="bg-select-top.png" className="w-full" width={400} height={139} />
          </div>
        </main>
      </div>
      <div className={'container-bottom flex flex-col'}>
        <div className={'container-searchbox  pt-6 ps-[16px] pe-[16px] pb-2 '} style={{ position: "-webkit-sticky", position: "sticky", top: "60px", backgroundColor: "white", zIndex: '2', boxShadow: isScrolledDown ? "0px -2px 25px 0px rgba(0,0,0,0.75)" : "" }}>
          <div className={'flex justify-between ' + ((isSeach ? 'hidden' : ''))}>
            <div className={'seleced-box ' + (isSeach ? 'hide' : '')}>
              <Subwaytextbox listData={selectOption} onChange={handleSelectChange} selectedValue={selectedValue} />
            </div>
            <div className={'border rounded-full border-[--neutral400] w-[45px] h-[45px] flex justify-center items-center'} onClick={toggleClass}>
              <div className={'seleced-box ' + (isSeach ? 'hide' : '')}>
                <Image src={IconSearch} alt="IconSearch" width={24} height={24} style={{ width: "24px", height: "24px", objectFit: "cover" }} />

              </div>
            </div>
            <div className={'fav-box border rounded-full border-[--neutral400] w-[45px] h-[45px] flex justify-center items-center ' + (isSeach ? 'hide' : '')}>
              <Image src={IconFavorite} alt="IconFavorite" width={24} height={24} style={{ width: "24px", height: "24px", objectFit: "cover" }} />
            </div>
          </div>
          <div className={'textsearch-box w-full ' + (isSeach ? 'active' : '')} >
            <div className={'flex w-full flex justify-between'}>
              <div className={'flex relative w-5/6'}>
                <input value={searchText} onInput={handleChangeTextSearch} className='border border-1 border-[#DFE0E7] w-full rounded-3xl h-[45px]  outline-none p-[16px]' placeholder='ค้นหาเมนู' />
                <div onClick={clearTextFunc} className={'flex absolute h-full items-center right-[10px] ' + (searchText.length > 0 ? '' : 'hidden')}>
                  <div className={' h-[24px] w-[24px]'}>
                    <Image src={Removecrosspluscircle} alt="Removecrosspluscircle" width={24} height={24} />

                  </div>
                </div>
              </div>
              <div onClick={handleClearText}>
                <Image src={CloseGreen} alt="CloseGreen" width={45} height={45} />
              </div>

            </div>
          </div>
        </div>

        <div className="ps-[16px] pe-[16px]">
          <div className={'container-content-bottom flex flex-col pt-5'} >
            {!dataPromohot ?
              <SkeletonLoading />
              :
              !searchText && dataPromohot.result ? dataPromohot.result.map((elm, index) => (
                <div key={'div' + index} id={'div' + index} className={'container-category'}>
                  {elm.con_type === 'square' ?
                    RenderCatTypeSquare(elm.container_name_th, elm.list_data, elm.icon, elm.text_color) :
                    RenderCatTypeList(elm.container_name_th, elm.list_data, elm.icon, elm.text_color)
                  }
                </div>
              )) :
                <div>
                  <div className='contanier-box-item'>
                    {dataPromohot.result.map((elm, index) => (


                      elm.list_data.map((elm2, index) => {
                        console.log("elm2", elm2)
                        if (elm2.th_name.includes(searchText)) {
                          return <>
                            <div className="box-item-list" key={'CLI' + elm.th_name}>
                              <CardListItem title={elm2.th_name} des={elm2.des} price={elm2.price} img={elm2.img} />
                            </div>
                          </>

                        }
                        // {
                        //   listData.map((elm) => (
                        //     
                        //   ))
                        // }

                      })



                    ))}
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
      <div className={"absolute top-0 z-50"}>
        <SideNavBar isOpen={isOpenBulgur} Close={setIsOpenBulgur} />
      </div>
    </div >
  );
}

function SkeletonLoading() {
  return (
    <div>
      <Skeleton count={1} height={23} borderRadius={24} />
      <div className={'list-promotion pt-2 grid grid-cols-2 gap-2 w-full'}>
        <RenderCardeSkel />
        <RenderCardeSkel />
        <RenderCardeSkel />
        <RenderCardeSkel />
      </div>
      <div className='contanier-box-item'>
        <div className="box-item-title">
          <RenderCardeSkel />
        </div>
        <RenderCardeSkel />
        <RenderCardeSkel />
        <RenderCardeSkel />
        <RenderCardeSkel />
      </div>
    </div>
  );
}

function RenderCardeSkel() {
  return (
    <div className="box-item-list">
      <Skeleton count={1} height={93} borderRadius={24} />
      <div className={'ps-[10px] flex flex-col w-1/2 justify-evenly'}>
        <div className="w-1/3">
          <Skeleton count={1} height={20} borderRadius={24} />
        </div>
        <div className="w-3/4">
          <Skeleton count={1} height={20} borderRadius={24} />
        </div>
        <div className="w-1/2">
          <Skeleton count={1} height={20} borderRadius={24} />
        </div>
      </div>
    </div>
  );
}

function RenderCatTypeSquare(title, listData, icon, textColor) {
  return (
    <div>
      <TittleHeader textHeader={title} img={'/' + icon} />
      <div className={'list-promotion pt-2 grid grid-cols-2 gap-2 w-full'}>
        {listData.map((elm) => (
          <div key={'CTS' + elm.th_name}>
            <CardSquare title={elm.th_name} price={elm.price} img={elm.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

function RenderCatTypeList(title, listData, icon, textColor) {
  return (
    <div>
      <div className='contanier-box-item'>
        <div className="box-item-title">
          <TittleHeader textHeader={title} />
        </div>
        {listData.map((elm) => (
          <div className="box-item-list" key={'CLI' + elm.th_name}>
            <CardListItem title={elm.th_name} des={elm.des} price={elm.price} img={elm.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
