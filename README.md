# Qiklife Web App

This project is a React application built with Vite and Tailwind CSS. It provides a dashboard-style interface and includes a custom visual editor for inline editing.

## Prerequisites

- Node.js v18 or later
- npm (comes with Node.js)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` by default.

3. Build for production:

   ```bash
  npm run build
  ```

4. Preview the production build locally:

   ```bash
  npm run preview
  ```

5. Send a test payload to the webhook:
   ```bash
   npm run send-webhook
   ```

## Project Structure

- `src/` – Application source code
- `plugins/` – Custom Vite plugins used for the visual editor
- `tools/` – Helper scripts (e.g., `generate-llms.js` to create `public/llms.txt`, `send-webhook.js` to send a webhook payload)

## Notes

During development, the visual editor plugins automatically inject scripts for error monitoring and fetch interception. These are enabled when `NODE_ENV` is not `production`.
