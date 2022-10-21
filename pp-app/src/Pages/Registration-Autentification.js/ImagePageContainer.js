import "../../Fonts/Poppins-Bold.ttf"
import "../../App.css";
import "./loginPage.css";
import React from 'react';

export default function ImagePageContainer(props) {
  return (
    <>
      <div className="mx-auto flex flex-col relative z-10 imageBg min-h-screen bg-cover md:space-y-20 space-y-12 pb-16">
        {props.content}
      </div>  
    </>
  )
}