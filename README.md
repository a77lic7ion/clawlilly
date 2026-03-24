# Neon Claw 🕹️

Neon Claw is a high-energy, 3D physics-based arcade game built with React, Three.js, and WebSockets. Players compete in real-time to grab the most valuable prizes from a virtual claw machine and climb the global leaderboard.

![Neon Claw Gameplay](https://picsum.photos/seed/claw-machine/800/400)

## ✨ Features

- **3D Physics Gameplay**: Powered by `@react-three/rapier`, experience realistic claw movements and prize collisions.
- **Real-Time Multiplayer**: Spectate others while you wait for your turn. The game state is synchronized across all clients using Socket.io.
- **Mobile Optimized**: Play on the go with dedicated touch controls (D-Pad and Drop button) and a responsive UI.
- **Dynamic Scoring**:
  - **Colors**: Yellow (50), Red (40), Green (30), Orange (20), Gray (10).
  - **Shapes**: Dodecahedron (x3), Cone (x3), Sphere (x2), Cylinder (x2), Box (x1).
- **Leaderboard**: Compete for the top spot with a persistent high-score system.
- **Fast-Paced Rounds**: 60-second sessions to maximize your score.

## 🚀 Tech Stack

- **Frontend**:
  - [React](https://reactjs.org/)
  - [Three.js](https://threejs.org/) via [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
  - [Zustand](https://github.com/pmndrs/zustand) (State Management)
  - [Tailwind CSS](https://tailwindcss.com/) (Styling)
  - [Framer Motion](https://www.framer.com/motion/) (Animations)
- **Backend**:
  - [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
  - [Socket.io](https://socket.io/) (Real-time communication)
  - [Better-SQLite3](https://github.com/WiseLibs/better-sqlite3) (Data persistence)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/neon-claw.git
   cd neon-claw
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## 🎮 How to Play

1. **Join**: Enter a 3-letter initials to identify yourself on the leaderboard.
2. **Queue**: Click "Start Game" to enter the arena.
3. **Control**:
   - **Desktop**: Use `WASD` or `Arrow Keys` to move the claw, and `Space` to drop.
   - **Mobile**: Use the on-screen D-pad and the red "DROP" button.
4. **Score**: Aim for high-value colors (Yellow) and complex shapes (Dodecahedrons/Cones) to multiply your points!

## 📜 License

This project is licensed under the Apache-2.0 License.
