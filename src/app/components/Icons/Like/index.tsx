import { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";
import { Lottie } from "../../Lottie";
import { LikeIconProps } from "./types";

export function LikeIcon({ isLiked }: LikeIconProps) {
  const likeRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isLiked) {
      likeRef.current?.setDirection(1);
    } else {
      likeRef.current?.setDirection(-1);
    }

    likeRef.current?.play();
  }, [isLiked]);

  return (
    <Lottie
      color="#71767C"
      animationName="heart-like"
      autoplay={false}
      width={30}
      lottieRef={likeRef}
      loop={false}
    />
  );
}
