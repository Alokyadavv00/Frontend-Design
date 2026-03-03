## Tech Stack

- React 19 (with Vite)
- Tailwind CSS v3
- React Router v7
- Lucide React (icons)
- clsx & tailwind-merge (for clean class management)


## ✨ Features

### 1. Pixel-Accurate UI
The layout, typography (Inter), spacing, and color system were carefully matched to the design reference.  
The teal accent and surface tones were implemented consistently across screens.

### 2. Dark & Light Mode
A theme toggle is implemented using the Context API.  
Both themes adjust background surfaces, borders, text colors, and shadows seamlessly.

### 3. Responsive Design
The application works smoothly across mobile and desktop devices.

- Clean stacking layout on smaller screens  
- Horizontal scrolling support for tables  
- Designed starting from 375px mobile view  

### 4. Reusable Component Architecture
The UI is built using reusable components for better scalability and maintainability:

- Button  
- Input  
- Badge  
- StatusChip  
- Layout components  

### 5. Mock Data Integration
All dashboard stats, activity logs, vulnerability cards, and tables are powered by local mock data (`src/data/mock.ts`).  
No backend integration is included, as per the challenge requirements.

---

## 📦 Setup Instructions

To run the project locally:

### 1. Clone the repository

```bash
git clone <your-repo-url>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open in your browser

```
http://localhost:5173
```

---
