import Link from "next/link"

export default function FeaturesPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-blue-50 p-4">
      <div className="relative flex flex-col items-center justify-center text-center p-8 max-w-2xl mx-auto overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm shadow-xl animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-600 mb-6">
          Game Features & Tech Stack
        </h1>
        <div className="text-left text-gray-700 mb-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Key Features:</h2>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>
              <span className="font-semibold">Fully Responsive Design:</span> Seamlessly adapts to mobile, tablet, and
              desktop screens using Tailwind CSS.
            </li>
            <li>
              <span className="font-semibold">Player vs Player Mode:</span> Enjoy classic Tic Tac Toe with a friend.
            </li>
            <li>
              <span className="font-semibold">Player vs AI Mode:</span> Challenge a basic AI opponent for single-player
              fun.
            </li>
            <li>
              <span className="font-semibold">Score Tracking:</span> Keeps track of wins for X, O, and Draws across
              multiple games (persisted in local storage).
            </li>
            <li>
              <span className="font-semibold">Game History:</span> Review past moves and jump to any point in the game.
            </li>
            <li>
              <span className="font-semibold">Engaging UI:</span> Vibrant color palette, hover effects, transitions,
              animations, and confetti on win.
            </li>
            <li>
              <span className="font-semibold">Sound Effects:</span> Audio feedback for moves and wins.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8">Tech Stack & Components:</h2>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>
              <span className="font-semibold">Next.js (App Router):</span> The React framework for production, providing
              routing, server components (though most game logic is client-side for interactivity), and API routes.
            </li>
            <li>
              <span className="font-semibold">React:</span> For building the interactive user interface with components
              and hooks.
            </li>
            <li>
              <span className="font-semibold">Tailwind CSS:</span> A utility-first CSS framework for rapid and
              responsive styling.
            </li>
            <li>
              <span className="font-semibold">Shadcn/ui:</span> Reusable UI components (like `Button`) for a consistent
              and modern look.
            </li>
            <li>
              <span className="font-semibold">`react-confetti`:</span> For the celebratory confetti animation on game
              win.
            </li>
            <li>
              <span className="font-semibold">`localStorage`:</span> Used for persisting game scores across browser
              sessions.
            </li>
            <li>
              <span className="font-semibold">Custom React Hooks:</span> `useTicTacToe` encapsulates all game logic,
              state management, and AI integration for clean separation of concerns.
            </li>
            <li>
              <span className="font-semibold">Modular Components:</span> `Square`, `GameBoard`, `LandingPage`, and
              `TicTacToeGame` components for better organization and reusability.
            </li>
          </ul>
        </div>
        <Link href="/" className="text-blue-600 hover:underline text-lg font-medium">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
