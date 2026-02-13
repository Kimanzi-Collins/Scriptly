<div align="center">
  <img src="assets/scriptly-scribble.gif" width="900" alt="Scriptly - notes that flow" />
  <p><strong>Scriptly</strong> is a MERN-powered note taking app built for fast capture, clean organization, and flow.</p>
</div>

## Animated Title

GitHub does not run SVG or CSS animation in README files. Generate the scribble GIF locally:

```bash
python tools/generate_scribble_gif.py --text "Scriptly - notes that flow" --out assets/scriptly-scribble.gif
```

If the font is not found, the script falls back to a default font. Drop a handwritten font file like
`Caveat-Regular.ttf` into the repo root to use it.

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
