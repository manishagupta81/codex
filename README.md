# Tutoring with Muskaan (React)

This project is a React rewrite of the original static site. It uses Vite for fast local development and includes a middleware layer scaffold for Calendly API integrations.

## Quick start

1. Install dependencies: `npm install`
2. Copy the environment template: `cp .env.example .env`
3. Add your Calendly credentials to `.env`
4. Run the development server: `npm run dev`

## Project structure

- `src/` – React components, sections, and shared configuration
  - `components/` – navigation, footer, Calendly embed
  - `sections/` – page content split into focused React sections
  - `middleware/` – API integration scaffolding (Calendly client and helpers)
  - `config/` – environment-driven configuration helpers
  - `hooks/` – reusable hooks (e.g., Calendly event type loader)
- `.env.example` – placeholder values for required environment variables
- `vite.config.js` – Vite configuration with the React plugin

## Calendly integration

- `VITE_CALENDLY_EVENT_URL` controls the embedded scheduler in `BookSession`
- `VITE_CALENDLY_API_KEY` and `VITE_CALENDLY_OWNER_URI` enable the middleware layer to call the Calendly REST API
- `src/middleware/calendly/` contains fetch helpers that build on a shared authorized client in `src/middleware/http/calendlyClient.js`
- `useCalendlyEventTypes` consumes the middleware to hydrate UI state when credentials are present

Add your keys to `.env`, restart the dev server, and the “Available Session Types” list will populate automatically.
