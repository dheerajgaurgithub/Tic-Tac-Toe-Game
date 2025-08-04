"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const router = useRouter()

  const handleStartGame = (mode: "pvp" | "ai") => {
    router.push(`/game?mode=${mode}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-blue-50 p-4 relative">
      <div className="relative flex flex-col items-center justify-center text-center p-8 max-w-md mx-auto overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm shadow-xl animate-fadeIn">
        {/* Decorative background elements */}
        <div
          className="absolute -top-10 -left-10 w-40 h-40 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 mb-4 animate-pulse tracking-tight">
          Tic Tac Toe
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Challenge your mind & friends with a loving twist!</p>

        <div className="flex flex-col gap-4 w-full relative z-10">
          <Button
            onClick={() => handleStartGame("pvp")}
            className="px-8 py-4 text-lg md:text-xl font-semibold rounded-full bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-lg hover:from-rose-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 animate-slideInFromLeft"
          >
            Player vs Player
          </Button>
          <Button
            onClick={() => handleStartGame("ai")}
            className="px-8 py-4 text-lg md:text-xl font-semibold rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 animate-slideInFromRight"
          >
            Player vs AI
          </Button>
        </div>
      </div>

      {/* Developer Details */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right text-gray-700 text-xs sm:text-sm p-3 bg-white/60 rounded-lg backdrop-blur-md shadow-md z-10">
        <p>Developed by:</p>
        <p className="font-semibold">Dheeraj Gaur</p>
        <p>B.Tech CSE, GLA University Mathura</p>
        <p>Web Developer</p>
        <a
          href="https://dheerajgaurofficial.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Portfolio
        </a>
      </div>
    </div>
  )
}
