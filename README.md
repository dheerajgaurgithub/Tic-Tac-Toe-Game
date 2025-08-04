# Tic Tac Toe - Playful, Stylish, and Mobile-Ready Web Game

A modern, fully responsive, and engaging Tic Tac Toe game built with Next.js. This project aims to provide a delightful user experience with a vibrant UI, an AI opponent, score tracking, and game history.

## ✨ Features

*   **Fully Responsive Layout**: Adapts seamlessly to mobile, tablet, and desktop screens using Tailwind CSS.
*   **Interactive Landing Page**: An attractive and colorful entry screen with options to start a game.
*   **Player vs. Player Mode**: Enjoy the classic Tic Tac Toe experience with a friend.
*   **Player vs. AI Mode**: Challenge a basic AI opponent for single-player fun.
*   **Score Tracking**: Persistent tracking of wins for 'X', 'O', and Draws, saved locally in your browser.
*   **Game History**: A detailed list of all moves made in the current game, allowing you to jump back to any previous state.
*   **Visually Engaging UI**:
    *   Vibrant color palette with gradients and subtle background animations.
    *   Hover effects, transitions, and animations for interactive elements.
    *   Clearly distinguishes 'X' and 'O' with unique styles.
    *   Confetti animation and sound feedback on winning.
    *   Winning line highlight on the board.
*   **Sound Effects**: Audio cues for moves and game completion.
*   **Informative Pages**: Dedicated "About" and "Features" pages accessible via global navigation.
*   **Developer Details**: Subtle developer information displayed on the landing page.

## 🚀 Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **UI Library**: [React](https://react.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
*   **Confetti Animation**: [react-confetti](https://www.npmjs.com/package/react-confetti)
*   **Icons**: [Lucide React](https://lucide.dev/icons/) (implicitly available with shadcn/ui)
*   **State Management**: React's `useState` and `useEffect` with a custom `useTicTacToe` hook.
*   **Local Storage**: For persisting game scores.
*   **Audio**: Native HTML5 Audio API.

## 🛠️ Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository (if applicable):**
    \`\`\`bash
    git clone <repository-url>
    cd tic-tac-toe-game
    \`\`\`

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    \`\`\`

3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    \`\`\`

4.  **Open in your browser:**
    The application will be accessible at \`http://localhost:3000\`.

## 📂 Project Structure

\`\`\`
tic-tac-toe-game/
├── app/
│   ├── layout.tsx         # Root layout with global navigation
│   ├── page.tsx           # Landing page with game mode selection and developer details
│   ├── game/
│   │   ├── page.tsx       # Game page (Tic Tac Toe board)
│   │   └── loading.tsx    # Loading state for game page
│   ├── about/
│   │   └── page.tsx       # About page
│   └── features/
│       └── page.tsx       # Features page
├── components/
│   ├── ui/                # shadcn/ui components (Button, etc.)
│   ├── square.tsx         # Individual Tic Tac Toe square component
│   ├── game-board.tsx     # Component for rendering the 3x3 game board
│   └── tic-tac-toe-game.tsx # Main game logic and UI component
├── hooks/
│   └── use-tic-tac-toe.ts # Custom hook encapsulating game state, logic, AI, scores, and history
├── public/
│   └── sounds/
│       ├── move.mp3       # Sound effect for a player's move
│       └── win.mp3        # Sound effect for a game win
├── app/globals.css        # Global CSS styles (Tailwind base, components, utilities)
├── tailwind.config.ts     # Tailwind CSS configuration with custom colors and animations
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
\`\`\`

## 🤝 Contributing

Feel free to fork the repository, open issues, or submit pull requests to improve the game!

## 👨‍💻 Developer

**Dheeraj Gaur**
B.Tech CSE, GLA University Mathura
Web Developer
[Portfolio](https://dheerajgaurofficial.netlify.app/)
