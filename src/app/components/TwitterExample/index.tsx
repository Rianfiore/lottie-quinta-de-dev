import { useState } from "react";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { LikeIcon } from "../Icons/Like";

export function TwitterExample() {
  const [isLikedPost, setIsLikedPost] = useState(false);
  function handleLikePost() {
    setIsLikedPost(!isLikedPost);
  }

  return (
    <div className="w-[500px] flex flex-col justify-center items-center gap-6 p-4">
      <div className="flex items-center justify-between gap-3">
        <figure className="max-w-[40px] max-h-[40px] rounded-full self-start">
          <img
            src="https://pbs.twimg.com/profile_images/1480533687913615362/b5z0xzmN_400x400.jpg"
            className="rounded-full w-full h-full"
          />
        </figure>

        <div className="flex flex-col items-center justify-center gap-2 w-fit">
          <span className="flex items-center w-full justify-between">
            <span className="flex items-center gap-2 d">
              <p className="font-semibold text-[#e7e9ea] hover:cursor-pointer hover:underline">
                Martins
              </p>
              <span className="flex gap-1">
                <p className="text-[#71767C] hover:cursor-pointer">
                  {"@marttieer · "}
                </p>
                <p className="text-[#71767C] hover:cursor-pointer hover:underline">
                  {"15h"}
                </p>
              </span>
            </span>

            <p className="text-[#71767C] hover:cursor-pointer font-bold">...</p>
          </span>

          <h1 className="text-[#e7e9ea]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>
      </div>

      <div className="flex w-full justify-center items-center gap-24">
        <span className="flex w-full justify-between items-center">
          <span className="flex items-center gap-2 hover:cursor-pointer">
            <FaRegComment fill="#71767C" />
            <p className="text-[#71767C]">265</p>
          </span>

          <span className="flex items-center gap-2 hover:cursor-pointer">
            <AiOutlineRetweet fill="#71767C" />
            <p className="text-[#71767C]">288</p>
          </span>

          <span
            className="flex items-center hover:cursor-pointer"
            onClick={handleLikePost}
          >
            <LikeIcon isLiked={isLikedPost} />

            <p className="text-[#71767C]">10.59{isLikedPost ? "3" : "2"}</p>
          </span>

          <span className="flex items-center hover:cursor-pointer gap-2">
            <BiBarChart fill="#71767C" />
            <p className="text-[#71767C]">1mi</p>
          </span>
        </span>

        <span className="flex justify-end items-center gap-4">
          <BsBookmark fill="#71767C" className="hover:cursor-pointer" />
          <FiUpload stroke="#71767C" className="hover:cursor-pointer" />
        </span>
      </div>
    </div>
  );
}
