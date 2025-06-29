import React from 'react';
import "../Styles/Home.css";
import "../Styles/animation.css";
import FirstPage from '../HomeSection/Firstpage';
import SecondPage from '../HomeSection/SecondPage';

const Develop: React.FC = () => {
  return (
    <>
      <FirstPage/>
      <SecondPage/>
    </>
  );
};

export default Develop;