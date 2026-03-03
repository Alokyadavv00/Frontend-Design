# Fenrir Security Frontend Challenge

This repository contains the solution for the Fenrir Security Frontend Challenge. It replicates the provided UI/UX design references into a responsive, production-ready React application.

## 🚀 Live Demo

[Insert live deployment URL here once deployed]

## 🛠️ Tech Stack

- **Framework**: React 19 alongside Vite
- **Styling**: Tailwind CSS (v3)
- **Routing**: React Router (v7)
- **Icons**: Lucide React
- **Utilities**: `clsx` and `tailwind-merge` for class deduplication and merging.

## 🌟 Key Features

1. **Pixel-Perfect UI**: Carefully replicated the layouts, typography (Inter font), colors (Teal accent, severe-based palettes), and sizing from the reference.
2. **Dark & Light Mode Support**: Native toggle feature implemented using Context API. Both themes feel natural and adjust background surfaces, borders, and shadows seamlessly.
3. **Responsiveness**: 
   - Mobile and desktop compatible design.
   - Smart stacking and horizontal scrolling added for tabular elements to support small screens (375px+).
4. **Reusable Component Architecture**: Separated concerns using structural and UI components (e.g., `Button`, `Input`, `Badge`, `StatusChip`).
5. **Simulated State and Data**: Integrated realistic local mock data (`src/data/mock.ts`) to populate statistics, activity logs, vulnerability cards, and tables. 

## 📦 Setup Instructions

If you wish to run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd fenrir-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` to view it in the browser.

## 📝 Known Limitations

- All data populated across the three screens (Login, Dashboard, Scan Detail) is mocked from static files as requested. There is no backend connected.
- Authenticate form submissions on the Login page route automatically to the Dashboard for demonstration purposes without real authentication.
- The interactive Console Logs and Verification Logs toggle works visually, and logs contain simplistic regex parsing for specific highlights.

---
*Built with ❤️ for Fenrir Security*
