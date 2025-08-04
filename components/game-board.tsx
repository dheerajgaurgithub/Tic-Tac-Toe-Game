"use client"

import Square from "./square"

interface GameBoardProps {
  board: (string | null)[]
  onClick: (i: number) => void
  winningLine: number[] | null
}

export default function GameBoard({ board, onClick, winningLine }: GameBoardProps) {
  const renderSquare = (i: number) => {
    const isWinningSquare = winningLine ? winningLine.includes(i) : false
    return <Square key={i} value={board[i]} onClick={() => onClick(i)} isWinningSquare={isWinningSquare} />
  }

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-8">
      {Array.from({ length: 9 }).map((_, i) => renderSquare(i))}
    </div>
  )
}
