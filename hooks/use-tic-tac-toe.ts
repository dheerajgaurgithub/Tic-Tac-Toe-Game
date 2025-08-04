"use client"

import { useState, useEffect, useCallback } from "react"

interface GameState {
  board: (string | null)[]
  xIsNext: boolean
}

interface Scores {
  X: number
  O: number
  Draws: number
}

// Helper function to calculate the winner and winning line
function calculateWinner(squares: (string | null)[]): { winner: string | null; line: number[] | null } {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] }
    }
  }
  if (squares.every((square) => square !== null)) {
    return { winner: "Draw", line: null }
  }
  return { winner: null, line: null }
}

// Basic AI logic (minimax for optimal play, or simpler for a "loving" feel)
const getAIMove = (board: (string | null)[], player: string): number => {
  const emptySquares = board.map((val, idx) => (val === null ? idx : -1)).filter((idx) => idx !== -1)

  // 1. Check for winning move
  for (const i of emptySquares) {
    const newBoard = [...board]
    newBoard[i] = player
    if (calculateWinner(newBoard).winner === player) {
      return i
    }
  }

  // 2. Block opponent's winning move
  const opponent = player === "X" ? "O" : "X"
  for (const i of emptySquares) {
    const newBoard = [...board]
    newBoard[i] = opponent
    if (calculateWinner(newBoard).winner === opponent) {
      return i
    }
  }

  // 3. Take center
  if (emptySquares.includes(4)) {
    return 4
  }

  // 4. Take opposite corner
  const corners = [0, 2, 6, 8]
  for (const corner of corners) {
    if (emptySquares.includes(corner) && board[8 - corner] === opponent) {
      return corner
    }
  }

  // 5. Take any corner
  const availableCorners = emptySquares.filter((idx) => corners.includes(idx))
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)]
  }

  // 6. Take any side
  const sides = [1, 3, 5, 7]
  const availableSides = emptySquares.filter((idx) => sides.includes(idx))
  if (availableSides.length > 0) {
    return availableSides[Math.floor(Math.random() * availableSides.length)]
  }

  // Fallback: random move (should not be reached if emptySquares is not empty)
  return emptySquares[Math.floor(Math.random() * emptySquares.length)]
}

export function useTicTacToe(mode: "pvp" | "ai") {
  const [history, setHistory] = useState<GameState[]>([{ board: Array(9).fill(null), xIsNext: true }])
  const [stepNumber, setStepNumber] = useState(0)
  const current = history[stepNumber]
  const { board, xIsNext } = current
  const { winner, line: winningLine } = calculateWinner(board)

  const [scores, setScores] = useState<Scores>(() => {
    if (typeof window !== "undefined") {
      const savedScores = localStorage.getItem("ticTacToeScores")
      return savedScores ? JSON.parse(savedScores) : { X: 0, O: 0, Draws: 0 }
    }
    return { X: 0, O: 0, Draws: 0 }
  })

  const handleClick = useCallback(
    (i: number) => {
      const currentBoard = history[stepNumber].board.slice()
      if (calculateWinner(currentBoard).winner || currentBoard[i]) {
        return
      }

      const newBoard = currentBoard
      newBoard[i] = xIsNext ? "X" : "O"

      const newHistory = history.slice(0, stepNumber + 1).concat([
        {
          board: newBoard,
          xIsNext: !xIsNext,
        },
      ])
      setHistory(newHistory)
      setStepNumber(newHistory.length - 1)
      // Removed playMoveSound()
    },
    [history, stepNumber, xIsNext],
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ticTacToeScores", JSON.stringify(scores))
    }
  }, [scores])

  useEffect(() => {
    if (winner) {
      // Removed playWinSound()
      // Only update scores if the game just ended (i.e., winner was null before this render)
      // This prevents multiple score updates if useEffect runs multiple times for the same winner
      const prevWinner = calculateWinner(history[stepNumber > 0 ? stepNumber - 1 : 0].board).winner
      if (prevWinner === null) {
        // Only update if there wasn't a winner in the previous state
        setScores((prevScores) => ({
          ...prevScores,
          [winner as "X" | "O" | "Draws"]: prevScores[winner as "X" | "O" | "Draws"] + 1,
        }))
      }
    } else if (mode === "ai" && !xIsNext && !winner) {
      // AI's turn
      const timer = setTimeout(() => {
        const aiMove = getAIMove(board, "O")
        handleClick(aiMove)
      }, 500) // Delay AI move for better UX
      return () => clearTimeout(timer)
    }
  }, [winner, board, xIsNext, mode, handleClick, history, stepNumber]) // Removed playWinSound from dependencies

  const jumpTo = useCallback((step: number) => {
    setStepNumber(step)
  }, [])

  const resetGame = useCallback(() => {
    setHistory([{ board: Array(9).fill(null), xIsNext: true }])
    setStepNumber(0)
  }, [])

  const resetScores = useCallback(() => {
    setScores({ X: 0, O: 0, Draws: 0 })
  }, [])

  return {
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
  }
}
