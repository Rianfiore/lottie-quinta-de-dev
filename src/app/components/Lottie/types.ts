import { getLottieAnimationByName } from '@/assets/lottie';
import { LottieComponentProps } from 'lottie-react';

type AnimationNameType = keyof ReturnType<typeof getLottieAnimationByName>;

export interface LottieProps extends Omit<LottieComponentProps, 'animationData'> {
  animationName: AnimationNameType
}