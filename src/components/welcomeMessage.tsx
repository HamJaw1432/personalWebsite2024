"use client"
import { useEffect, useState } from "react";
import styled from 'styled-components';
import welcomeTexts from '@/constants/welcomeTxt.json';

const HelloText = styled.h1`
  font-size: 60px;
`

const WelcomeText = styled.p`
  margin: 10px;
  font-size: 25px;
`

export default function WelcomeMessage() {

  const [currentWelcomeMessage, setCurrentWelcomeMessage] = useState<number>(0);

  useEffect(()=>{
    const intervalID = setInterval(()=>setCurrentWelcomeMessage((currentWelcomeMessage+1) % welcomeTexts.length), 2500);
    return () => {clearInterval(intervalID)};
  })

  return (
    <>
      <HelloText>{welcomeTexts[currentWelcomeMessage]}</HelloText>
      <WelcomeText>Welcome to my (Jawad Arshad's) personal website</WelcomeText>
    </>
  );
}
