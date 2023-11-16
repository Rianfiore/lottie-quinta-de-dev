"use client";

import { getLottieAnimationByName } from "@/assets/lottie";
import LottieReact from "lottie-react";
import { LottieController } from "./compounds/LottieController";
import { LottieProps } from "./types";

export function Lottie({
  style,
  width,
  height,
  animationName,
  ...props
}: LottieProps) {
  return (
    <LottieReact
      style={{ ...style, width, height }}
      animationData={getLottieAnimationByName()[animationName]}
      {...props}
    ></LottieReact>
  );
}

Lottie.Controller = LottieController;
