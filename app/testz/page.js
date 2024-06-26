// pages/index.js

"use client"
import React, { useState } from 'react';
import TextInput from '@/components/TextInput';
import useStore from '@/lib/store2';
import { useEffect } from 'react';

import CardListItem from '@/components/Card/CardListItem';
import CardSquare from '@/components/Card/CardSquare';
const HomePage = () => {
  const text = useStore((state) => state.text);
  // const [demoValue, setDemoValue] = useState('123')
  // const onchangeValue = (e)=>{
  //   setDemoValue(e.target.value)
  // }
  console.log("text", text)
  return (
    <div>
      <h1>Text Input with Zustand</h1>
      <TextInput />

      <TextInput />

      <div style={{display:'flex',flexDirection:'column'}}>
        <CardSquare  tagText={'testx'} tagBgColor={'--green600'} isDisabled={true}/>
        <CardListItem  tagText={'testy'} tagBgColor={'--green600'} isDisabled={true}/>

      </div>
      <div>
        {/* test: */}
        {/* <input  value={demoValue} onChange={onchangeValue}/> */}

      </div>
    </div>
  );
};

export default HomePage;
