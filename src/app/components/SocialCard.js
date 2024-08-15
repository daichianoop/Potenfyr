import React from 'react';
import Link from "next/link";
import Image from "next/image";
const SocialCard = () => {
  return (
      <>
        <div>
          <ul className={"flex items-center gap-x-3 justify-center"}>
            <li className={"size-10"}>
              <Link href={"https://www.instagram.com/daichi.anoop/"}>
                <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"}
                       src={"/instagram.svg"} alt={"1"} width={1000} height={1000}/>
              </Link>
            </li>
            <li className={"size-10"}>
              <Link href={"https://www.linkedin.com/in/anoop-kumar-42b527285"}>
                <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"}
                       src={"/linkedin.svg"} alt={"1"} width={1000} height={1000}/>
              </Link>
            </li>
            <li className={"size-10"}>
              <Link href={"/dada"}>
                <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"}
                       src={"/gmail.svg"} alt={"1"} width={1000} height={1000}/>
              </Link>
            </li>
            <li className={"size-10"}>
              <Link href={"/hbidhbasa"}>
                <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"}
                       src={"/troll.png"} alt={"1"} width={1000} height={1000}/>
              </Link>
            </li>
            <li className={"size-10"}>
              <Link href={"/"}>
                <Image className={"hover:translate-y-0.5 active:translate-y-1 transition-all duration-500"}
                       src={"/heart.png"} alt={"1"} width={1000} height={1000}/>
              </Link>
            </li>
          </ul>
        </div>
      </>
  );
};

export default SocialCard;