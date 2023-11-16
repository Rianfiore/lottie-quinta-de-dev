"use client";

import { LottieRefCurrentProps } from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import {
  FaClock,
  FaExchangeAlt,
  FaPause,
  FaPlay,
  FaRunning,
  FaStop,
} from "react-icons/fa";
import { LottieProps } from "../../types";
import { AnimationControllerType, LottieControllerProps } from "./types";
export function LottieController({ children }: LottieControllerProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const [animController, setAnimController] = useState<AnimationControllerType>(
    {
      isPaused: false,
      isStopped: false,
      speed: 1,
      direction: 1,
      currentTime: 0,
      totalTime: 0,
    }
  );

  function handlePlayOrPause() {
    setAnimController((prevState) => ({
      ...prevState,
      isPaused: !prevState.isPaused,
      isStopped: false,
    }));

    if (animController.isPaused) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.pause();
    }
  }

  function handleStop() {
    setAnimController((prevState) => ({
      ...prevState,
      isStopped: true,
      isPaused: true,
    }));

    lottieRef.current?.stop();
  }

  function handleSpeed(e: React.ChangeEvent<HTMLInputElement>) {
    const speed = Number(e.target.value);
    setAnimController((prevState) => ({ ...prevState, speed }));

    lottieRef.current?.setSpeed(speed);
  }

  function handleReverseDirecton() {
    setAnimController((prevState) => ({
      ...prevState,
      direction: (prevState.direction * -1) as 1 | -1,
    }));

    lottieRef.current?.setDirection(animController.direction);
  }

  useEffect(() => {
    const totalDuration = Number(
      lottieRef.current?.animationItem?.getDuration().toFixed(2)
    );

    setAnimController((prevState) => ({
      ...prevState,
      totalTime: totalDuration,
    }));
  }, [lottieRef.current?.animationItem, animController.totalTime]);

  lottieRef.current?.animationItem?.addEventListener("drawnFrame", (e) => {
    const newCurrentTime = Number(
      (e.currentTime / lottieRef.current?.animationItem?.frameRate!).toFixed(1)
    );
    setAnimController((prevState) => ({
      ...prevState,
      currentTime: newCurrentTime,
    }));
  });

  return (
    <div className="bg-green-900 p-4 rounded-lg flex flex-col gap-4">
      <div className="bg-green-950">
        {React.cloneElement<LottieProps>(children, {
          lottieRef: lottieRef,
        })}
      </div>

      <div className="flex flex-col justify-between items-center gap-6 p-4">
        <div className="flex w-full justify-between">
          <span onClick={handlePlayOrPause} className="hover:cursor-pointer">
            {animController.isPaused ? (
              <FaPlay className="fill-green-300" />
            ) : (
              <FaPause className="fill-green-300" />
            )}
          </span>

          <span onClick={handleStop} className="hover:cursor-pointer">
            <FaStop className="fill-green-300" />
          </span>

          <span
            onClick={handleReverseDirecton}
            className="hover:cursor-pointer"
          >
            <FaExchangeAlt className="fill-green-300" />
          </span>
        </div>

        <span className="flex flex-col items-center w-full gap-2">
          <span className="flex items-center justify-center gap-2 w-full">
            <FaRunning size={20} className="fill-green-300" />
            <input
              className="hover:cursor-pointer w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-300 [&::-webkit-slider-track]:bg-green-300 "
              type="range"
              min={0.1}
              max={4}
              step={0.1}
              defaultValue={1}
              onChange={handleSpeed}
            />
          </span>

          <p className="text-green-300 font-semibold">
            Speed: {animController.speed}x
          </p>
        </span>

        <span className="flex flex-col items-center w-full gap-2">
          <span className="flex items-center justify-center gap-2 w-full">
            <FaClock size={20} className="fill-green-300" />
            <input
              className=" w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-300 [&::-webkit-slider-track]:bg-green-300 "
              type="range"
              step={0.01}
              max={animController.totalTime}
              value={animController.currentTime}
              readOnly
            />
          </span>

          <p className="text-green-300 font-semibold">
            {animController.currentTime}s / {animController.totalTime}s
          </p>
        </span>
      </div>
    </div>
  );
}
