import React, { useEffect, useState } from 'react';
import "../Styles/Home.css";
import "../Styles/animation.css";
import FirstPage from '../HomeSection/Firstpage';
import SecondPage from '../HomeSection/SecondPage';

const Develop: React.FC = () => {

  const [isXL,setIsXl]=useState<boolean>(false)
  useEffect(()=>{
    const HandleSize=()=>{
      setIsXl(window.innerWidth>=1280);
    }
    HandleSize();
    window.addEventListener('resize',HandleSize)
  },[])
  return (
    <>
      <FirstPage/>
      {isXL && <SecondPage/>}
    </>
  );
};

export default Develop;