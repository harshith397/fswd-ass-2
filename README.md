# FSWD Course - Assignment 2

**Course:** Full Stack Web Development (FSWD)  
**Project Name:** `ass-1` (Vite + React)

---

## 📌 Project Overview
This repository contains the complete solutions for **Assignment 2** built with modern **React + Vite**. All components are demonstrated interactively on the homepage organized with clear question numbers, descriptions, and verified functionality.

---

## 📂 Project Structure

```text
ass-1/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx       # Q1: Reusable Product Card Component
│   │   │   └── ProductCard.css       # Q1: Card Styling
│   │   ├── Button/
│   │   │   ├── Button.jsx            # Q2: Styled Button Component
│   │   │   └── Button.css            # Q2: External CSS & Hover Rules
│   │   └── Stopwatch/
│   │       ├── Stopwatch.jsx         # Q3: Stopwatch with Hooks & Cleanup
│   │       └── Stopwatch.css         # Q3: Stopwatch Styling
│   ├── App.jsx                       # Main demonstration page for Q1, Q2, Q3
│   ├── App.css                       # Layout, section badges & navigation styling
│   ├── index.css                     # Global design system
│   └── main.jsx                      # Vite entry point
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

1. **Navigate to project directory**:
   ```bash
   cd ass-1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📝 Questions & Implementations

### **Question 1: Reusable ProductCard Component**
- **Description:** React code to create a reusable `ProductCard` component that receives `name`, `price`, `image`, and `rating` as props (using default parameter values & `defaultProps`) and render four different product cards inside the `App` component.
- **Component File:** [`src/components/ProductCard/ProductCard.jsx`](./src/components/ProductCard/ProductCard.jsx)
- **Features:**
  - Accepts `name`, `price`, `image`, `rating` props.
  - Implements ES6 default parameter values and `ProductCard.defaultProps` fallback.
  - Dynamic star rating visualizer (`★` and `☆`) and formatted price (`$XX.XX`).
  - Four distinct product cards rendered in a responsive CSS grid on the home page:
    1. Sony WH-1000XM5 Wireless Headphones ($398.00)
    2. Apple Watch Ultra 2 ($799.00)
    3. Keychron Q1 Pro Mechanical Keyboard ($199.99)
    4. Nike Air Zoom Pegasus 40 ($130.00)
  - Also displays a standalone default-props fallback test card.

---

### **Question 2: Styling React Elements (Button Component)**
- **Description:** React code to demonstrate styling of React elements: create a `Button` component that receives a `variant` prop (`primary` / `success` / `danger`) and applies inline styles (`style` object), a CSS class (`className`) from an external stylesheet, and a hover effect.
- **Component File:** [`src/components/Button/Button.jsx`](./src/components/Button/Button.jsx)
- **Stylesheet:** [`src/components/Button/Button.css`](./src/components/Button/Button.css)
- **Demonstration:**
  - **Variant Prop:** Supports `'primary'`, `'success'`, and `'danger'`.
  - **Inline Style Object:** Base dimensions, font, dynamic border colors, and inline hover effects computed within JavaScript.
  - **External CSS Classes:** `.btn-custom`, `.btn-primary`, `.btn-success`, `.btn-danger` from `Button.css`.
  - **Hover Effects:** Showcased through CSS `:hover` pseudo-classes (glow, elevation, box shadow) and React dynamic hover state via `onMouseEnter` / `onMouseLeave`.
  - Includes interactive click feedback and a disabled button variant showcase.

---

### **Question 3: Stopwatch Component**
- **Description:** React code to build a stopwatch with `Start`, `Pause`, and `Reset` buttons that displays minutes and seconds. Use `useState` and `useEffect` (clear the interval on unmount).
- **Component File:** [`src/components/Stopwatch/Stopwatch.jsx`](./src/components/Stopwatch/Stopwatch.jsx)
- **Stylesheet:** [`src/components/Stopwatch/Stopwatch.css`](./src/components/Stopwatch/Stopwatch.css)
- **Features:**
  - **Hooks Used:**
    - `useState(0)` for elapsed seconds.
    - `useState(false)` for running status.
    - `useEffect` manages `setInterval` when running and safely calls `clearInterval(intervalId)` inside the cleanup return function.
  - **Controls:** `Start`, `Pause`, `Reset` with appropriate button enable/disable states.
  - **Display:** Prominent digital clock layout formatting time as `MM : SS` with blinking colon and status pill (`Ready`, `Running`, `Paused`).
  - **Unmount Verification:** Includes a toggle button on the home page (`Mount / Unmount Stopwatch`) to verify interval clearance and lack of memory leaks when unmounted.

---

## 📦 Ready for GitHub Submission
This folder is standalone and ready to be initialized as a git repository and pushed to your GitHub account:
```bash
git init
git add .
git commit -m "Complete FSWD Assignment-2 solutions"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
