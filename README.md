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

# Matter.js Animation Guide

1. Install dependencies
   ```bash
   npm install matter-js
   npm install jquery

2. Add following scripts tag in index.html
   
   At the end of the <body> tag
   Include these external libraries required for Matter.js animations.
   
   <script
      src="https://code.jquery.com/jquery-3.6.0.js"
      integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js"></script>
    <script src="https://cdn/jsdelivr.net/npm/matter-wrap@0.2.0/build/matter-wrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/matter-attractors@0.1.6/build/matter-attractors.min.js"></script>

   At the end of head tag
   Add your custom Matter.js script file. Replace the path with the correct file location in your directory.
   
   <script src="/src/particles/matter.js" defer></script>
   
