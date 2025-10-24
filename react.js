import React from "react";
import { Globe, Music, Smartphone, Watch, Leaf } from "lucide-react";

export default function GlobalTrendPoster() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0F1C] text-white px-6 text-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        THE WORLD IS CHANGING FAST.
      </h1>
      <p className="text-xl font-semibold mb-10 text-gray-200">
        ARE YOU KEEPING UP?
      </p>

      {/* Circle with icons */}
      <div className="relative w-64 h-64 border-4 border-yellow-400 rounded-full flex items-center justify-center">
        {/* Vertical and Horizontal lines */}
        <div className="absolute w-full h-0.5 bg-yellow-400"></div>
        <div className="absolute h-full w-0.5 bg-yellow-400"></div>
        <div className="absolute w-64 h-64 rounded-full border border-yellow-400 opacity-40"></div>

        {/* Inner Icons */}
        <div className="absolute flex flex-col items-center justify-center">
          <div className="bg-[#0A0F1C] px-3 py-1 rounded-md border-2 border-cyan-400 text-cyan-400 font-semibold text-lg">
            AI
          </div>
        </div>

        {/* Top Left - Shirt */}
        <div className="absolute top-10 left-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#FB7185"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M4 7l4-3 2 3h4l2-3 4 3v13H4z" />
          </svg>
        </div>

        {/* Top Right - Watch */}
        <div className="absolute top-10 right-10 text-cyan-400">
          <Watch className="w-8 h-8" />
        </div>

        {/* Bottom Left - Phone */}
        <div className="absolute bottom-10 left-10 text-green-400">
          <Smartphone className="w-8 h-8" />
        </div>

        {/* Bottom Right - Music Note */}
        <div className="absolute bottom-10 right-10 text-yellow-300">
          <Music className="w-8 h-8" />
        </div>

        {/* Bottom Center - Leaf */}
        <div className="absolute bottom-5 text-green-400">
          <Leaf className="w-8 h-8" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 mt-10">
        <Globe className="w-6 h-6 text-white" />
        <span className="text-xl font-semibold tracking-wide">GLOBAL TREND</span>
      </div>
    </div>
  );
}
