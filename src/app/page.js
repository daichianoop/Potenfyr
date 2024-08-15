import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faServer, faPeopleGroup, faMemory } from "@fortawesome/free-solid-svg-icons";
import "./styles/card1234.css";
import Image from "next/image";
import Slider001 from "@/app/components/Slider001";

const Home = () => {
  return (
      <>
        <div className={"bg-[url('/bg-div-9.jpg')] bg-opacity-0 bg-cover h-screen w-screen"}>
          <div
              className={"text-neutral-200 h-screen w-screen flex items-center justify-start px-10 md:px-20 lg:px-20 xl:px-32"}
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))',
              }}>
            <div>
              <div
                  className={"text-neutral-300 text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold"}>Minecraft
                Server Hosting, Game Hosting & more...
              </div>
              <div className={"text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl pt-2"}>Elevate your server
                deployment today!
              </div>
              <div>
                <button
                    className="mt-5 overflow-hidden relative px-4 py-2 bg-black text-white border-none rounded-md text-2xl font-bold cursor-pointer group shadow-zinc-900 shadow-2xl"
                >
                  Get Started
                  <span
                      className="absolute w-52 h-32 -top-8 -left-2 bg-white rotate-11 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                  ></span>
                  <span
                      className="absolute w-52 h-32 -top-8 -left-2 bg-indigo-500 rotate-11 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                  ></span>
                  <span
                      className="absolute w-52 h-32 -top-8 -left-2 bg-indigo-700 rotate-11 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
                  ></span>
                  <span
                      className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-8"
                  >Discord!</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={"bg-[url('/bg-div-11.jpg')] bg-opacity-0 bg-cover"}>
          <div
              className={" text-neutral-200 pb-24 pt-32 flex items-center justify-start px-10 md:px-20 lg:px-20 xl:px-32"}
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1))',
              }}>
            <div>
              <div
                  className={"text-center text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-3 "}>Who
                are we ?
              </div>
              <div className={"text-center text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl mb-3"}>Unleash your
                gaming potential with Potenfyr Host! We offer free and paid game server plans, alongside Discord bot
                hosting, website creation, and secure database storage.
                <br/><br/> Dominate the competition with a lag-free server and a thriving community
                <br/> ~ all under one roof.
              </div>
              <div className={"flex items-center justify-center"}>
                <span
                    className={"text-center animate-pulse text-xl text-cyan-400 hover:text-2xl transition-all duration-500 cursor-pointer font-bold"}>Learn More &rarr;</span>
              </div>
              <div>
                <div className={"flex flex-wrap gap-x-12 justify-center mt-10 p-5 "}>

                  <div
                      className={"w-52 justify-around items-center flex h-40 bg-transparent rounded-xl backdrop-blur-md pr-3 bg-blend-luminosity mt-3"}>
                    <div className={" flex items-center"}>
                      <FontAwesomeIcon icon={faUser} className="fa-user size-20"
                                       style={{color: "white"}}></FontAwesomeIcon>
                    </div>
                    <div className={"flex-row "}>
                      <div className={"text-3xl font-bold"}>43</div>
                      <div className={" text-xl font-bold"}>Users</div>
                    </div>
                  </div>


                  <div
                      className={"w-52 justify-around items-center flex h-40 bg-transparent rounded-xl backdrop-blur-md pr-3 bg-blend-luminosity mt-3"}>
                    <div className={" flex items-center"}>
                      <FontAwesomeIcon icon={faMemory} className="fa-memory size-20"
                                       style={{color: "white"}}></FontAwesomeIcon>
                    </div>
                    <div className={"flex-row "}>
                      <div className={"text-3xl font-bold"}>2</div>
                      <div className={" text-xl font-bold"}>Nodes</div>
                    </div>
                  </div>

                  <div
                      className={"w-52 justify-around items-center flex h-40 bg-transparent rounded-xl backdrop-blur-md pr-3 bg-blend-luminosity mt-3"}>
                    <div className={" flex items-center"}>
                      <FontAwesomeIcon icon={faServer} className="fa-server size-20"
                                       style={{color: "white"}}></FontAwesomeIcon>
                    </div>
                    <div className={"flex-row "}>
                      <div className={"text-3xl font-bold"}>20</div>
                      <div className={" text-xl font-bold"}>Servers</div>
                    </div>
                  </div>

                  <div
                      className={"w-52 justify-around items-center flex h-40 bg-transparent rounded-xl backdrop-blur-md pr-3 bg-blend-luminosity mt-3"}>
                    <div className={" flex items-center"}>
                      <FontAwesomeIcon icon={faPeopleGroup} className="fa-people-group size-20"
                                       style={{color: "white"}}></FontAwesomeIcon>
                    </div>
                    <div className={"flex-row "}>
                      <div className={"text-3xl font-bold"}>5</div>
                      <div className={" text-xl font-bold"}>Staff</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"bg-[url('/bg-div-10.jpg')] bg-cover h-screen"}>
          <div
              className={"h-screen"}
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))',
              }}>
            <div className={"pt-16 bg-transparent backdrop-blur-md bg-blend-luminosity"}>
              <div className={"text-5xl text-white text-center font-bold pb-5"}>Utilites</div>
              <Slider001/>
            </div>
          </div>
        </div>
      </>
  );
};

export default Home;