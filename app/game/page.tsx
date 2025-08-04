"use client"

import { useSearchParams } from "next/navigation"
import TicTacToeGame from "@/components/tic-tac-toe-game"

export default function GamePage() {
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode") as "pvp" | "ai" | null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-blue-50 p-4">
      <TicTacToeGame mode={mode || "pvp"} /> {/* Default to pvp if mode is not specified */}
    </div>
  )
}
