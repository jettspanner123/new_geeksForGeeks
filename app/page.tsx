"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Auth />
    </div>
  );
}

interface ThemeProps {
  bodyTheme: boolean;
}

import Image from "next/image";
import LoginBackgroundImage from "./1157058.jpg";
import { useScroll, useTransform } from "framer-motion";

const Auth = () => {
  const [themeColor, setThemeColor] = useState(true);
  const [loadingState, setLoadingState] = useState(false);
  const username = "uddeshyaSingh";
  const password = "uddeshya123uddeshya123";
  const [logedIn, setLogedIn] = useState(false);

  function setFunction() {
    setThemeColor(!themeColor);
    setLoadingState(!loadingState);
  }

  if (loadingState) {
    setTimeout(() => {
      setLoadingState(!loadingState);
    }, 2000);
  }

  return (
    <div>
      {logedIn ? (
        <div>
          <div
            className={`${
              themeColor ? `bg-black text-white ` : `bg-white text-black `
            } transition-all flex duration-500 w-screen h-screen relative delay-[1s]`}
          >
            <div
              className={`bg-red-300  fixed h-screen w-screen z-10 flex justify-center items-center text-[3rem] font-bold transition-all duration-200 ${
                loadingState ? `top-0` : `top-[-100%]`
              }`}
            >
              <span className={"bg-white text-red-300 p-5 rounded-lg px-8"}>
                Loading...
              </span>
            </div>
            <div
              onClick={() => setFunction()}
              className={
                "flex cursor-pointer hover:text-red-300 absolute right-10 top-10 transition-all duration-150 justify-around w-[5rem] items-center rounded-xl gap-[0.5rem]"
              }
            >
              {themeColor ? (
                <BsFillSunFill size={35} />
              ) : (
                <BsFillMoonFill size={35} />
              )}
              {themeColor ? "Light" : "Dark"}
            </div>
            <Navbar bodyTheme={themeColor} />
            <div className={`p-0  w-full mt-[5rem] `}>
              <div
                className={`font-semibold absolute top-8 left-[8rem] text-[1.8rem] `}
              >
                SomeNameHere
                <div
                  className={`${
                    themeColor ? `bg-white` : `bg-black`
                  } h-[4px] w-full rounded-xl `}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={"bg-black w-screen h-screen  overflow-hidden"}>

          <motion.div
            className={"flex justify-center items-center w-screen h-screen"}
          >
            <div
              className={
                "bg-white flex  w-[80%] h-[45rem] rounded-xl overflow-hidden "
              }
            >
              <div onClick={() => setLogedIn(!logedIn)} className={'bg-white px-4 py-2 border-b-8 hover:border-b-4 hover:translate-y-1/3 border-4 border-black absolute left-1/2 -translate-x-1/2 w-[68%] bottom-[9rem] flex items-center justify-center font-bold text-2xl rounded-md cursor-default shadow-2xl '}>

                Play TitleWars
              </div>
              <div className={"w-[50%] flex flex-col items-center"}>
                <h1 className={"text-[2rem] font-bold text-black mt-[5rem] "}>
                  Create New Accout
                  <div
                    className={"w-full h-[5px]  rounded-xl bg-red-400"}/>
                </h1>
                <input
                  className={
                    "px-4 py-2 mt-[3.5rem] w-[70%] text-xl rounded-md outline-0 border-4 placeholder-black border-black placeholder:font-bold"
                  }
                  placeholder={"Enter Name: "}
                />
                <input
                    className={
                      "px-4 py-2 mt-10 placeholder-black placeholder:font-bold w-[70%] text-xl rounded-md outline-0 border-4 border-black"
                    }
                    placeholder={"Enter Username: "}
                />
                <input
                    className={
                      "px-4 py-2 mt-10  w-[70%] text-xl rounded-md outline-0 border-4 border-black placeholder-black placeholder:font-bold"
                    }
                    placeholder={"Enter Password: "}
                    type={'password'}
                />
                <button className={'bg-red-300 text-black font-bold text-xl mt-10 px-4 py-2 rounded-md w-[70%] border-4 border-black border-b-8 hover:border-b-4 hover:translate-y-1/3'}>
                  Submit
                </button>
              </div>
              <div
                className={
                  "w-[50%] bg-red-300 flex flex-col items-center border-l-2 border-black"
                }
              >
                <h1 className={"text-[2rem] font-bold text-black mt-[5rem] "}>
                  LogIn To Account
                  <div className={"w-full h-[5px]  rounded-xl bg-white"}></div>
                </h1>
                <input
                    className={
                      "px-4 placeholder-black py-2 mt-[3.5rem] w-[70%] text-xl rounded-md outline-0 border-4 border-black placeholder:font-bold"
                    }

                    placeholder={"Enter Name: "}
                />
                <input
                    className={
                      "px-4 py-2 placeholder-black mt-10 w-[70%] placeholder:font-bold text-xl rounded-md outline-0 border-4 border-black"
                    }
                    placeholder={"Enter Username: "}
                />
                <input
                    className={
                      "px-4 py-2 mt-10  w-[70%] text-xl placeholder-black  rounded-md placeholder:font-bold outline-0 border-4 border-black"
                    }
                    placeholder={"Enter Password: "}
                    type={'password'}
                />
                <button className={'bg-white text-red-300 font-bold text-xl mt-10 px-4 py-2 rounded-md w-[70%] border-4 border-black border-b-8 hover:border-b-4 hover:translate-y-1/3'}>
                  Submit
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

import { AiFillHome } from "react-icons/ai";
import { HiDocumentDuplicate } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { BiSolidLogInCircle } from "react-icons/bi";
import { SiSmartthings } from "react-icons/si";

const Navbar = ({ bodyTheme }: ThemeProps) => {
  const [toShow, setToShow] = useState(0);
  return (
    <div
      className={`${
        bodyTheme ? "bg-[rgb(34,34,34)]" : "bg-gray-300"
      } h-screen transition-all duration-500 delay-[0.5] shadow-2xl flex items-center`}
    >
      <ul className={"mx-5 flex flex-col gap-[2rem]"}>
        <li
          className={"relative"}
          onMouseOver={() => setToShow(1)}
          onMouseLeave={() => setToShow(0)}
        >
          <Link href="#">
            <AiFillHome size={35} />
          </Link>
          <AnimatePresence>
            <motion.span
              className={`${toShow == 1 ? `absolute` : `hidden`} z-10 ${
                bodyTheme ? `bg-[rgb(34,34,34)]` : `bg-gray-300`
              } text-xl left-[100%] p-5 top-[-1rem] font-semibold rounded-xl`}
            >
              Home
            </motion.span>
          </AnimatePresence>
        </li>
        <li
          className={"relative"}
          onMouseOver={() => setToShow(2)}
          onMouseLeave={() => setToShow(0)}
        >
          <Link href="#">
            <HiDocumentDuplicate size={35} />
          </Link>
          <AnimatePresence>
            <motion.span
              className={`${toShow == 2 ? `absolute` : `hidden`} z-10 ${
                bodyTheme ? `bg-[rgb(34,34,34)]` : `bg-gray-300`
              } text-xl left-[100%] p-5 top-[-1rem] font-semibold rounded-xl`}
            >
              Documentation
            </motion.span>
          </AnimatePresence>
        </li>
        <li
          className={"relative"}
          onMouseOver={() => setToShow(3)}
          onMouseLeave={() => setToShow(0)}
        >
          <Link href="#">
            <AiFillPhone size={35} />
          </Link>
          <AnimatePresence>
            <motion.span
              className={`${toShow == 3 ? `absolute` : `hidden`} z-10 ${
                bodyTheme ? `bg-[rgb(34,34,34)]` : `bg-gray-300`
              } text-xl left-[100%] p-5 top-[-1rem] font-semibold rounded-xl`}
            >
              Contacts
            </motion.span>
          </AnimatePresence>
        </li>
        <li
          className={"relative"}
          onMouseOver={() => setToShow(4)}
          onMouseLeave={() => setToShow(0)}
        >
          <Link href="#">
            <BiSolidLogInCircle size={35} />
          </Link>
          <AnimatePresence>
            <motion.span
              className={`${toShow == 4 ? `absolute` : `hidden`} z-10 ${
                bodyTheme ? `bg-[rgb(34,34,34)]` : `bg-gray-300`
              } text-xl left-[100%] p-5 top-[-1rem] font-semibold rounded-xl`}
            >
              LogIn/SignUp
            </motion.span>
          </AnimatePresence>
        </li>
        <li
          className={"relative"}
          onMouseOver={() => setToShow(5)}
          onMouseLeave={() => setToShow(0)}
        >
          <Link href="#">
            <SiSmartthings size={35} />
          </Link>
          <AnimatePresence>
            <motion.span
              className={`${toShow == 5 ? `absolute` : `hidden`} z-10 ${
                bodyTheme ? `bg-[rgb(34,34,34)]` : `bg-gray-300`
              } text-xl left-[100%] p-5 top-[-1rem] font-semibold rounded-xl`}
            >
              Contacts
            </motion.span>
          </AnimatePresence>
        </li>
      </ul>
    </div>
  );
};
