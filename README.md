# Algorithm Ahoy 🚀

Welcome to **Algorithm Ahoy** - a 48-hour hackathon project where the challenge is simple yet brilliant: **Collect all the coins** by **programming in Python** to control the player through a series of game puzzles! Built with a WASM-powered Rust backend and a Next.js frontend, this project is a deep dive into web tech, Rust, and the thrill of hackathon chaos.

## 👋 About Me

Hey there! I'm Shane. I’m a programmer, hackathon enthusiast, and someone who enjoys pushing the limits of tech in very short time frames. This project is part of a self-imposed hackathon designed not only to showcase my coding skills but also to create something exciting and unique. Plus, it's all about showing how far I can go in 48 hours, from idea to fully functional web app.

## 🕹️ Game Objective

**Algorithm Ahoy** is a puzzle game where:
1. **You program** to control the player.
2. Your goal is to **collect all the coins on each level**.
3. Python is the programming language of choice, and all controls happen through an embedded editor on the frontend.

This project is built to test your coding skills while solving logical puzzles - the only way to progress is to get your code right!

## 📜 Hackathon Rules

1. **48 hours coding time** - no extensions, no more time.
2. **No outside help** - it's a one-person show.
3. **No pre-existing code**, aside from a theme picker and some existing React components.
4. No pre-existing projects or ideas, making this completely from scratch.

## 💡 The Idea & Execution

I wanted to create something **programming-centric** yet **playful**. After bouncing around a few ideas, a puzzle game with programming-based controls seemed like the perfect mix. And I set out to do it all with Rust (because “Mumma didn’t raise no quitter”) and WebAssembly to set it apart from the typical hackathon projects.

### The Tech Stack

- **Rust** + **WASM**: For the backend and game logic, allowing me to build something lean and powerful in the browser.
- **Next.js**: Simplifies the front end with React-based UI and allows for rapid feature iteration.
- **Python Interpreter in JS**: Eventually, I embedded a Python interpreter within Next.js to execute the user's Python code directly in the frontend.

### Building the Project

Creating **Algorithm Ahoy** was a rollercoaster! Here’s a breakdown:

#### Day 1

- **Interpreter Juggling**: I tested various interpreters, bouncing between Python and Lua, finding libraries that didn’t compile to WASM, or lacking documentation.
- **Breakthrough Moment**: Realized that by using a JavaScript Python interpreter, I could run Python directly in the browser and still call WASM functions.
- **Foundation**: Built the `GameState` and a basic board layout. The aim was to have custom levels by the end of day 2.

#### Day 2

- **Final Stretch**: Got the game running smoothly in the browser, with functional controls.
- **Victory**: Finished the game, tested everything, and it was good to go!

## 🎥 Documentation & Retrospective

This journey will be documented in a **full retrospective** video for YouTube, where I’ll break down my process, the obstacles, and my learnings. This video will also demonstrate that hackathons are a fantastic way to learn fast and deliver impactful projects under pressure.

## 📆 Project Timeline

- **Day 0**: Planning and deciding on the theme picker bit and a "planning day" skit.
- **Day 1**: Foundation, interpreter woes, GameState setup, and custom board generation.
- **Day 2**: Player controls, final polish, testing, and deployment.

## 🚀 Try It Out!

Check out **Algorithm Ahoy** live: [Live Demo](https://algorithm-ahoy.vercel.app/)  
Or dive into the code on [GitHub](https://github.com/ShaneSaw1705/Algorithm-Ahoy).
Heres a slightly outdated version of the wasm code becuase I am having trouble with github treating the refactor as a single branch [Wasm](https://github.com/ShaneSaw1705/Algorithm-Ahoy-Rust).

## 🎯 Goals & Next Steps

This project isn’t just a tech exercise; it’s a **career milestone**. By documenting my hackathon approach and showing my abilities, I’m building a portfolio that stands out to employers and serves as my stepping stone into the industry.

Thanks for checking out **Algorithm Ahoy**! Let the coding (and coin-collecting) begin!
