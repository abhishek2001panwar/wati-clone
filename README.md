# WATI Landing Page Clone


[[Live link](https://abhishek2001panwar.github.io/wati-clone/)] 

## 🚀 Overview
This repository contains a frontend implementation of the [WATI landing page](https://www.wati.io/lp/home/). It was developed as part of an evaluation assignment focusing on translating a polished design into a fully functional, responsive, and semantic web interface without the use of CSS frameworks like Tailwind or Bootstrap. Let the code speak for itself!

## 🎯 Evaluation Criteria Addressed

This implementation strictly adheres to the requested evaluation metrics:

* **Clean Coding Practices:** The codebase is split logically into semantic HTML (`index.html`), structured stylesheets (`css/styles.css`, `css/responsive.css`), and modular JavaScript (`js/script.js`).
* **Strict BEM Methodology:** Every single class uses the Block-Element-Modifier (`.block__element--modifier`) architecture for isolated, predictable, and maintainable styling. 
* **Responsive Design:** A mobile-first approach was utilized, ensuring the layout fluidly adapts across mobile devices, tablets, and wide-screen desktops using well-defined CSS media queries.
* **Pixel-Perfect Attention to Detail:** Typography, fluid spacing, color palettes, and overall visual consistency have been meticulously matched to the original WATI landing page.
* **Functional Elements:** The sticky navbar, mobile hamburger menu, interactive UI tabs, and smooth scrolling are all implemented purely with Vanilla JavaScript.
* **Meaningful Version Control:** The GitHub commit history reflects a modular, step-by-step development process.

## 🛠️ Tech Stack
* **HTML5:** Semantic architecture
* **CSS3:** Custom BEM styles, CSS Variables for theming, Flexbox/Grid for layout
* **JavaScript (ES6):** Vanilla DOM manipulation for interactive components

## 💡 Approach & Problem Solving

When approaching this challenge, my primary focus was maintainability and scalability. 

1. **Architecture Planning:** I began by breaking down the WATI landing page into macro-components (Header, Hero, Feature Tabs, Testimonials, Footer). 
2. **Variable System:** Extracted global themes (colors, typography, spacing scales) into CSS variables (`:root`) to ensure a single source of truth and absolute visual consistency.
3. **BEM Implementation:** Enforced a strict BEM convention. By doing so, I avoided heavy CSS specificity battles and ensured that each component is entirely independent and reusable.
4. **Responsive Strategy:** Designed mobile-up. Hard-coded widths were explicitly avoided in favor of responsive percentage fractions, `max-width`, and `flex-wrap` properties.
5. **Interactive Polish:** Used plain JavaScript to create smooth state transitions for the mobile menu and responsive layout features, keeping performance top-of-mind without needing React or heavy frontend libraries.

## ⚙️ Setup Instructions

To evaluate the project locally, the setup is beautifully simple:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:abhishek2001panwar/wati-clone.git
   cd wati-clone
   ```
2. **Run it:**
   There is no build step required. Simply open `index.html` directly in any modern browser. Alternatively, you can run a local development server for a better experience:
   ```bash
   npx serve . 
   # or with Python
   python -m http.server 
   ```

## 📂 Project Structure

```text
├── assets/         # Optimized images, logos, and vector icons
├── css/
│   ├── styles.css     # Global styles, CSS variables, and base BEM blocks
│   └── responsive.css # Media queries mapping breakpoints
├── js/
│   └── script.js      # Interactive features (Menu, Tabs, Listeners)
├── index.html      # Semantic page structure
└── README.md       # Project documentation
```

---
*Created by [Abhishek Panwar](https://github.com/abhishek2001panwar) for front-end evaluation.*
