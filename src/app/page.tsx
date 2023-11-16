"use client";

import { useState } from "react";
import { Lottie } from "./components/Lottie";
import { TwitterExample } from "./components/TwitterExample";

export default function Home() {
  const [showAnimations, setShowAnimations] = useState(false);

  return (
    <main className=" bg-[#000] flex min-h-screen flex-col items-center px-24 py-12 gap-6">
      <section className="flex w-full justify-center items-center">
        <button
          className="bg-green-800 text-green-100 font-bold py-2 px-4 rounded-lg"
          onClick={() => setShowAnimations(!showAnimations)}
        >
          {showAnimations ? "Hide" : "Show"} Animations
        </button>
      </section>

      {showAnimations && (
        <section className="flex w-full justify-center items-center gap-10">
          <Lottie.Controller>
            <Lottie animationName="read-book" width={200} />
          </Lottie.Controller>

          <Lottie.Controller>
            <Lottie animationName="throw-ball" width={200} />
          </Lottie.Controller>

          <Lottie.Controller>
            <Lottie animationName="party-time" width={200} />
          </Lottie.Controller>
        </section>
      )}

      <section className="w-full flex col items-center justify-center">
        <TwitterExample />
      </section>
    </main>
  );
}
