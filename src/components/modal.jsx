import React, { useState } from "react";
import { Heart, X } from "lucide-react";
import FlyingHearts from "./Flyinghearts";
import { InLoveIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import FlyingHugsAndKisses from "./FlyingKissHugs";
import FillableHeart from "./FillableHeart";

const Modal = ({ modalopen, setmodalopen }) => {
  const [lovecount, setlovecount] = useState(0);
  const [sparkleBounce, setSparkleBounce] = useState(false);

  const handleLove = () => {
    setlovecount((c) => c + 1);

    // trigger bounce
    setSparkleBounce(true);
    setTimeout(() => setSparkleBounce(false), 300);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center select-none">
      <FlyingHugsAndKisses />
      <FlyingHugsAndKisses />
      <FlyingHugsAndKisses />
      <div
        className="bg-gray-200 w-lg h-3/5 p-5 rounded-2xl flex flex-col 
          justify-start gap-10 "
      >
        <div className="flex justify-end">
          <X
            onClick={() => {
              setmodalopen(false);
            }}
            size={30}
            className="text-gray-500 cursor-pointer"
          />
        </div>
        <div className="flex flex-col justify-between gap-5">
          <div className="flex  flex-col justify-center items-center">
            <img
              className="size-70 rounded-2xl"
              src={`${import.meta.env.BASE_URL}loveyou.gif`}
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col gap-0 justify-center items-center select-none">
            {/* <h1 className="text-3xl">Love you raa Chitii Bangaram</h1> */}
            <h1 className="text-3xl">&#129655;&#x1FAC2;&#x2728;&#128536;</h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FillableHeart
              value={lovecount}
              max={10}
              onClick={handleLove}
            />

            <span className="text-2xl text-red-500 select-none flex items-center gap-2">
              Love you x {lovecount}
              <span
                className={`inline-block transition-transform duration-300 ${
                  sparkleBounce ? "scale-150" : "scale-100"
                }`}
              >
                💖
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
