import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-blue-50 p-4">
      <div className="relative flex flex-col items-center justify-center text-center p-8 max-w-2xl mx-auto overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm shadow-xl animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-600 mb-6">
          About Tic Tac Toe
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          Tic Tac Toe, also known as Noughts and Crosses, is a classic paper-and-pencil game for two players, X and O,
          who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a
          horizontal, vertical, or diagonal row wins the game.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          This digital version brings the timeless fun of Tic Tac Toe to your browser, offering a beautiful, responsive
          interface and the option to play against a friend or challenge a basic AI opponent. It's designed to be
          intuitive, engaging, and accessible on any device.
        </p>
        <Link href="/" className="text-blue-600 hover:underline text-lg font-medium">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
