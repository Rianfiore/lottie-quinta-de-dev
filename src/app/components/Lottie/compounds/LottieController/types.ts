
export interface LottieControllerProps {
  children: React.ReactElement
}

export interface AnimationControllerType {
  isPaused: boolean
  isStopped: boolean
  speed: number
  direction: 1 | -1
  currentTime: number
  totalTime: number
}