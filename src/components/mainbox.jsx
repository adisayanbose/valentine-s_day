import { useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Heart, HeartCrack, Rose } from "lucide-react";
import { KissingIcon } from "@hugeicons/core-free-icons";
import Modal from "./modal";
const Mainbox = () => {
  const noboxref = useRef(null);
  const [modalopen, setmodalopen] = useState(false);
  return (
    <div>
      <div
        className="bg-pink-200 flex flex-col
        gap-5 justify-center items-center rounded-2xl px-7 py-3 w-md"
      >
        <div className="w-full flex justify-between items-center">
          <Rose className="size-10 rotate-270 -scale-y-100" />
          <Rose className="size-10 rotate-270" />
        </div>
        <div className="flex flex-col select-none">
          <h1 className="text-center w-full  text-4xl text-pink-600 font-semibold">
            Visleksha
            <Heart className="w-full size-20 fill-pink-600 " />
          </h1>
          <div className="flex justify-center">
            <img
              className="rounded-3xl border-gray-400 border-2"
              src="./proposal.gif"
              alt=""
              srcSet=""
            />
          </div>
          <h1 className="text-center w-full text-4xl text-pink-600 font-semibold">
            Will you be my
            <br /> valentine
          </h1>
        </div>
        <div className="flex justify-center gap-5 ">
          <button
            className="bg-green-600  flex justify-center cursor-pointer
                items-center gap-2 text-white py-2 px-5  text-3xl rounded-4xl"
            onClick={() => {
              setmodalopen(true);
            }}
          >
            Yes
            <Heart className="p-0 h-full fill-white" />
          </button>

          <button
            className="bg-red-500 transition-all duration-200 ease-out
                text-white py-2 px-5 text-3xl rounded-4xl flex
             justify-center cursor-pointer items-center gap-2 "
            ref={noboxref}
            onMouseEnter={() => {
              const button = noboxref.current.getBoundingClientRect();
              let x = Math.random() * 500;
              let y = Math.random() * 500;
              noboxref.current.style.position = "fixed";
              x = (button.left + x) % (window.innerWidth - button.width);
              y = (button.top + y) % (window.innerHeight - button.height);
              console.log(x);
              console.log(y);
              noboxref.current.style.left = `${x}px`;
              noboxref.current.style.top = `${y}px`;
            }}
          >
            No
            <HeartCrack className="p-0 h-full " />
          </button>
        </div>
        <div className="flex w-full justify-between items-center">
          <HugeiconsIcon icon={KissingIcon} size={50} />
          <HugeiconsIcon icon={KissingIcon} size={50} />
        </div>
      </div>
      {modalopen && <Modal modalopen={modalopen} setmodalopen={setmodalopen} />}
    </div>
  );
};

export default Mainbox;
