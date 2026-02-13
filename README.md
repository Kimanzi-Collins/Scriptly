<div align="center">
  <svg width="900" height="220" viewBox="0 0 1200 220" role="img" aria-label="Scriptly - notes that flow">
    <style>
      .scribble { font-family: "Caveat", "Patrick Hand", cursive; font-size: 96px; fill: none; stroke: #1f1b16; stroke-width: 2.8; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 2400; stroke-dashoffset: 2400; animation: draw 1.8s ease forwards; }
      .ghost { opacity: 0.45; stroke-width: 2.2; animation-delay: 0.12s; }
      .slow { opacity: 0.35; stroke-width: 1.8; animation-delay: 0.32s; animation-duration: 2.4s; }
      .underline { fill: none; stroke: #c8542c; stroke-width: 5; stroke-linecap: round; stroke-dasharray: 900; stroke-dashoffset: 900; animation: underline 1.1s ease 1.1s forwards; }
      @keyframes draw { to { stroke-dashoffset: 0; } }
      @keyframes underline { to { stroke-dashoffset: 0; } }
    </style>
    <text x="60" y="140" class="scribble">Scriptly - notes that flow</text>
    <text x="62" y="142" class="scribble ghost">Scriptly - notes that flow</text>
    <text x="58" y="138" class="scribble ghost slow">Scriptly - notes that flow</text>
    <path class="underline" d="M70 168 C 260 200, 520 200, 770 176 S 1050 160, 1130 176" />
  </svg>
  <p><strong>Scriptly</strong> is a MERN-powered note taking app built for fast capture, clean organization, and flow.</p>
</div>

## About

Scriptly focuses on a smooth writing experience with thoughtful structure for real work. This README is a living draft as features land.

## Tech Stack

- MongoDB for durable note storage
- Express.js for the API layer
- React for the client UI
- Node.js for the runtime and services

## Features (in progress)

- Rich text notes with quick formatting
- Tags and search for instant recall
- Secure authentication and private workspaces
- Autosave and smooth sync

## Project Structure

- backend/ - API, data models, and services
- frontend/ - React app and UI components

## Getting Started

1. Install dependencies
   - `cd backend` then `npm install`
   - `cd ../frontend` then `npm install`
2. Configure environment
   - Create `.env` files for `backend/` and `frontend/` with your values
3. Run locally
   - `cd backend` then `npm run dev`
   - `cd ../frontend` then `npm run dev`

## Sponsors

Support Scriptly via GitHub Sponsors:

[![GitHub Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-Sponsor-ff5a5f?logo=githubsponsors&style=for-the-badge)](https://github.com/sponsors/YOUR_USERNAME)

## License

Apache 2.0. See [LICENSE.md](LICENSE.md).
