"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Confetti from "react-confetti"
import GameBoard from "./game-board"
import { useTicTacToe } from "@/hooks/use-tic-tac-toe"
import { useRouter } from "next/navigation"

interface TicTacToeGameProps {
  mode: "pvp" | "ai"
}

export default function TicTacToeGame({ mode }: TicTacToeGameProps) {
  const {
    board,
    xIsNext,
    winner,
    winningLine,
    history,
    stepNumber,
    scores,
    handleClick,
    jumpTo,
    resetGame,
    resetScores,
  } = useTicTacToe(mode)
  const [showConfetti, setShowConfetti] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (winner && winner !== "Draw") {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000) // Hide confetti after 3 seconds
    }
  }, [winner])

  let status: string
  if (winner) {
    status = winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`
  }

  const moves = history.map((_, step) => {
    const desc = step ? `Go to move #${step}` : "Go to game start"
    return (
      <li key={step} className="mb-1">
        <Button
          variant={step === stepNumber ? "secondary" : "ghost"}
          onClick={() => jumpTo(step)}
          className="w-full justify-start text-sm"
        >
          {desc}
        </Button>
      </li>
    )
  })

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 to-blue-50 rounded-3xl shadow-2xl animate-fadeIn">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-6 text-center animate-pulse">
          {status}
        </h2>
        <GameBoard board={board} onClick={handleClick} winningLine={winningLine} />
        {(winner || board.every((square) => square !== null)) && (
          <Button
            onClick={resetGame}
            className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 text-white shadow-lg hover:from-emerald-500 hover:to-sky-600 transition-all duration-300 transform hover:scale-105 mt-4"
          >
            Play Again
          </Button>
        )}
        <Button
          onClick={() => router.push("/")}
          variant="outline"
          className="mt-4 px-6 py-3 text-lg font-semibold rounded-full border-2 border-purple-400 text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
        >
          Back to Home
        </Button>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-4 mt-8 lg:mt-0 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg w-full max-w-xs">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Scores</h3>
        <div className="grid grid-cols-3 gap-2 w-full text-center text-lg font-semibold">
          <div className="p-2 rounded-md bg-blue-100 text-blue-700">
            X Wins: <span className="font-bold">{scores.X}</span>
          </div>
          <div className="p-2 rounded-md bg-rose-100 text-rose-700">
            O Wins: <span className="font-bold">{scores.O}</span>
          </div>
          <div className="p-2 rounded-md bg-gray-100 text-gray-700">
            Draws: <span className="font-bold">{scores.Draws}</span>
          </div>
        </div>
        <Button onClick={resetScores} variant="destructive" className="w-full mt-2 text-sm">
          Reset Scores
        </Button>

        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">Game History</h3>
        <ol className="w-full max-h-60 overflow-y-auto custom-scrollbar">{moves}</ol>
      </div>
    </div>
  )
}
