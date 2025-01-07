# Portfolio
This repository contains the source code for my personal portfolio website. The website showcases my skills, projects, and professional journey. It's designed to provide visitors with insights into my work and capabilities, serving as an online resume and a platform to connect with me.

## Live Demo
A live demo of the application is hosted at [https://sawantswanand.vercel.app](https://sawantswanand.vercel.app)

![Alt text](src/assets/portfolio.png)
## Built With
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for creating custom designs.
- [Framer Motion](https://www.framer.com/motion/) - A powerful animation library for React that provides smooth and interactive animations.

## Run Locally
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Swanand12/Chat-App.git](https://github.com/Swanand12/Portfolio.git)

2. Install dependencies:
   ```bash
   npm install

3. Run the App:
   ```bash
   npm start

## Matter.js Animation Guide

### Step 1: Install dependencies
   ```bash
   npm install matter-js
   npm install jquery
```

### Step 2: Create a matter.js file and add animation code 
![Animation Code](src/particles/matter.js)

### Step 3: Add Matter.js file component to App.js
```html
<MatterCanvas/>
```

### Step 4: Add Script Tags to `index.html`

To implement Matter.js animations, include the following script tags in your `index.html` file:

- #### At the End of the `<body>` Tag

-- Add these external libraries to load the required dependencies for Matter.js:

```html
<script
      src="https://code.jquery.com/jquery-3.6.0.js"
      integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
      crossorigin="anonymous"
></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js"></script>
<script src="https://cdn/jsdelivr.net/npm/matter-wrap@0.2.0/build/matter-wrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/matter-attractors@0.1.6/build/matter-attractors.min.js"></script>
```

- #### At the End of the <head> Tag

-- Include your Matter.js script file. Replace the path with the actual file location in your project directory:

```html
<script src="/src/particles/matter.js" defer></script>
```
   
