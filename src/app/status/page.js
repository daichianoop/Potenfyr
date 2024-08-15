"use client"
import React from 'react';
import IframeComponent from "@/app/components/IframeComponent";

const status = () => {
  return (
      <>
        <div className={"bg-[url('/bg-status.jpg')] bg-opacity-0 bg-cover bg-center bg-fixed"}>
          <div className={"text-neutral-200 flex items-center justify-center"}
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))',
              }}>
            <div className={"my-20 pt-1 w-11/12 "}>
              <IframeComponent/>
           </div>
          </div>
        </div>
      </>
  );
};

export default status;