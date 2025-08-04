"use client"

import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onStartGame: () => void
}

export default function LandingPage({ onStartGame }: LandingPageProps) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-8 max-w-md mx-auto overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm shadow-xl">
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
      <Button
        onClick={onStartGame}
        className="px-8 py-4 text-lg md:text-xl font-semibold rounded-full bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-lg hover:from-rose-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 relative z-10"
      >
        Play Game
      </Button>
    </div>
  )
}
