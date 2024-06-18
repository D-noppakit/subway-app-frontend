import React from 'react'
import Promotion from './Promotion'
import TittleHeader from './TittleHeader'
import FireImage from "@/public/imgs/fire-icon.png"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SectionBottom() {

  return (
    <main className='w-full h-full bg-white overflow-auto'>
      <TittleHeader LinkTo={"/category"} />
      {false ? <div className="m-3"><Skeleton count={1} height={300}  borderRadius={24} /></div> : <Promotion />}
      <div className='my-3'>
        <TittleHeader img={FireImage} textHeader='เมนูยอดฮิต' LinkTo={"/howtouse"} />
      </div>

    </main>
  )
}
