# Mario Bros - Vanilla JS

A fully playable Super Mario Bros game built with pure HTML5 Canvas, CSS, and JavaScript — no libraries, no frameworks, no images.

## Features

- 🎮 Smooth pixel-art Mario with animation
- 🍄 Goomba enemies with AI patrol behavior
- ❓ Question blocks that eject coins when hit from below
- 🌍 3000px wide scrolling world with parallax clouds
- 📷 Camera that follows Mario horizontally
- 💥 AABB collision detection for all entities
- 🏆 Score, Lives (3), and Coin tracking
- 🎯 Win condition (reach the castle)
- ✨ Score popups and animated coins
- 🖥️ Start screen and Game Over screen

## Controls

| Key | Action |
|-----|--------|
| `Arrow Left` / `A` | Move left |
| `Arrow Right` / `D` | Move right |
| `Arrow Up` / `Space` / `W` | Jump |
| `Enter` | Start / Restart |

## Gameplay

- **Stomp enemies**: Jump on top of Goombas to defeat them (+100 pts)
- **Collect coins**: Touch coins directly (+200 pts each)
- **Hit ? blocks**: Jump into them from below to release coins (+50 pts)
- **Reach the castle**: Get to the right end of the world to win!
- **Avoid enemies**: Getting hit loses a life; 3 lives total

## Architecture

All game logic lives in `public/mario.html` as a single-file vanilla JS game:

```
Class Game         – Main game loop, input, state machine
Class Mario        – Player character, physics, rendering
Class Goomba       – Enemy AI, collision, pixel-art rendering
Class Platform     – Static collision surfaces with brick art
Class QuestionBlock – Interactive blocks with coin rewards
Class Coin         – Collectible items (static + ejected)
Class Particle     – Score popup text animations
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production

```bash
npm run build
npm start
```

Or with PM2:
```bash
pm2 start ecosystem.config.js
```

## Tech Stack

- **Game**: Pure HTML5 Canvas 2D API + Vanilla JavaScript (ES6 Classes)
- **Wrapper**: Next.js 14 (App Router) — serves the game via iframe
- **Styling**: Tailwind CSS
- **Language**: TypeScript (Next.js layer) + JS (game layer)
