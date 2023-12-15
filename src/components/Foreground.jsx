import React, { useState } from "react";
import { useRef } from "react";
import Card from "./Card";
function Foreground() {
    const ref=useRef(null);
  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },

  ];
  return (
    <div ref={ref} className="fixed z-[3] w-full h-full  top-0 left-0  flex gap-10 p-5 flex-wrap">
      {
      data.map((item,index)=>(
        <Card key={index} data={item} reference={ref} />
      ))
      
      
      
      }
    </div>
  );
}

export default Foreground;
