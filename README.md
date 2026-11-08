<div align="center">

# 🏏 BPL Dream 11

**Build your dream Bangladesh cricket squad using a virtual coin budget.**

A fast, responsive fantasy-team builder made with React 19, TypeScript, Vite, Tailwind CSS v4 and DaisyUI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8)

[Live Demo](#) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Data Model](#-data-model)
- [Scripts](#-scripts)
- [Known Limitations & Roadmap](#-known-limitations--roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## ✨ About

**BPL Dream 11** lets you act as a team manager. You start with a budget of **5,000 coins**, browse a pool of Bangladeshi cricketers (batsmen, bowlers, all-rounders and wicketkeepers), and spend your coins to pick the players you want. Changed your mind? Remove a player and the coins return to your balance.

The app showcases modern React patterns: the `use()` hook with `Suspense` for data loading, lifted state for shared balance and squad, and fully typed components.

## 🚀 Features

- 💰 **Coin budget**: start with 5,000 coins, always visible in the navbar.
- 🧑‍🤝‍🧑 **Player pool**: 15 players with role, origin, batting style, bowling style and price.
- 🃏 **Rich player cards**: image, role badge, rating bar, styles and price at a glance.
- ✅ **Choose players**: buying a player deducts their price from your balance.
- 🔄 **Available / Selected toggle**: switch between the full pool and your squad in one click.
- 🗑️ **Remove & refund**: removing a player from your squad returns their coins.
- 🔔 **Toast feedback**: success and insufficient-balance messages via React Toastify.
- ⏳ **Suspense loading**: player data loads through `use()` and a Suspense fallback.
- 📱 **Responsive UI**: built with Tailwind CSS utilities and DaisyUI components.

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript 6](https://www.typescriptlang.org/) |
| Build Tool | [Vite 8](https://vite.dev/) with `@vitejs/plugin-react` |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) + [DaisyUI 5](https://daisyui.com/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| Linting | ESLint 10 + `typescript-eslint`, React Hooks and React Refresh plugins |

## 🖼️ Screenshots

> Add your screenshots to a `/screenshots` folder and update the paths below.

| Available Players | Selected Players |
| --- | --- |
| ![Available](./screenshots/available.png) | ![Selected](./screenshots/selected.png) |

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19 or later (required by Vite 8)
- npm, yarn or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jobayerh99/bpl-dream-11.git
cd bpl-dream-11

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the local URL printed in your terminal (usually [http://localhost:5173](http://localhost:5173)).

### Production build

```bash
npm run build     # type-check and build
npm run preview   # preview the production build locally
```

## 🧠 How It Works

1. `App.tsx` fetches `/data.json` once and passes the promise down. State for the **coin balance** lives here.
2. `Player.tsx` unwraps the promise with `use()` (inside `<Suspense>`), owns the **selected squad** state, and toggles between the Available and Selected views.
3. Clicking **Choose Player** on a card subtracts the player's price from the balance and adds them to the squad. If the balance is too low, an error toast is shown.
4. Clicking the trash icon in the Selected view removes the player and refunds their price.

```text
App (coin state, data promise)
├── Nav               → shows coin balance
├── Banner
└── Suspense
    └── Player (selectedPlayers state, view toggle)
        ├── AvailablePlayers → PlayerCard × n
        └── SelectedPlayers  → SelectedPlayerCard × n
```

## 📁 Project Structure

```text
bpl-dream-11/
├── public/
│   └── data.json                   # Player dataset
├── src/
│   ├── assets/                     # Logo and static images
│   ├── Components/
│   │   ├── Banner.tsx
│   │   ├── Nav.tsx                 # Navbar with coin balance
│   │   └── Players/
│   │       ├── Player.tsx          # Data unwrapping + tab toggle + squad state
│   │       ├── AvailablePlayers.tsx
│   │       ├── PlayerCard.tsx
│   │       ├── SelectedPlayers.tsx
│   │       └── SelectedPlayerCard.tsx
│   ├── types/
│   │   └── playerType.ts           # Iplayer interface
│   ├── App.tsx
│   ├── main.tsx                    # Entry point + ToastContainer
│   └── index.css                   # Tailwind + DaisyUI setup
├── index.html
├── vite.config.ts
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── package.json
```

## 🗃️ Data Model

Players live in `public/data.json` and are typed with `Iplayer`:

```ts
export interface Iplayer {
  playerName: string;
  playerImg: string;
  origin: string;
  playerType: string;     // Batsman | Bowler | All-rounder | Wicketkeeper-Batsman
  bowlingStyle: string;
  battingStyle: string;
  price: number;
}
```

To add a player, append a new object to `public/data.json`.

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check with `tsc -b` and build for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the project with ESLint |

## ⚠️ Known Limitations & Roadmap

This is a learning project, so a few features are still in progress:

- [ ] Block the purchase when the balance is too low (currently the player is still added to the squad after the error toast).
- [ ] Prevent duplicate selections after switching tabs.
- [ ] Limit squad size (for example, 11 players) and enforce role balance.
- [ ] Replace the placeholder banner with a real hero section.
- [ ] Use real per-player ratings and photos (currently a shared image and a fixed 4.8 rating).
- [ ] Wire up the navbar links and add an "Add more players" call to action.
- [ ] Persist the squad and balance with `localStorage`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 👤 Author

**Jobayer**

- GitHub: [@jobayerh99](https://github.com/jobayerh99)

---

<div align="center">

If you like this project, consider giving it a ⭐

</div>
