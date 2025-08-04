"use client"

interface SquareProps {
  value: string | null
  onClick: () => void
  isWinningSquare?: boolean
}

export default function Square({ value, onClick, isWinningSquare }: SquareProps) {
  const textColorClass = value === "X" ? "text-blue-600" : "text-rose-600"
  const winningClass = isWinningSquare ? "bg-yellow-200 scale-105" : ""

  return (
    <button
      className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-extrabold rounded-lg border-2 border-blue-200 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-200 ease-in-out
        ${value ? "" : "hover:bg-gray-100 active:scale-95"}
        ${textColorClass}
        ${winningClass}
        focus:outline-none focus:ring-4 focus:ring-rose-300 transform active:scale-90`}
      onClick={onClick}
      disabled={value !== null}
      aria-label={value ? `Square with ${value}` : "Empty square"}
    >
      {value}
    </button>
  )
}
