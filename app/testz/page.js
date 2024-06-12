// pages/index.js

"use client"
import React from 'react';
import TextInput from '@/components/TextInput';
import useStore from '@/lib/store2';
import { useEffect } from 'react';
const HomePage = () => {
    const text = useStore((state) => state.text);
    console.log("text",text)
  return (
    <div>
      <h1>Text Input with Zustand</h1>
      <TextInput />
    </div>
  );
};

export default HomePage;
