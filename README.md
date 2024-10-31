# Zebra-Puzzle
![image](https://github.com/user-attachments/assets/ff747c3f-2580-4b99-8fb1-3657827c68a7)

## Description 🔍
This project is a web-based solver for the famous Zebra Puzzle. The Zebra Puzzle, also known as Einstein's Puzzle, challenges players to determine a set of attributes for five houses based on a series of logical clues. This solver provides an interactive interface to help users solve the puzzle step-by-step.

## Features 🎉
- Interactive UI 🎨
Easy-to-use dropdowns to select each house’s color, nationality, drink, pet, and cigarette.

- Real-Time Feedback ✅❌
See if your answers are right or wrong instantly with color-coded hints.

- Lives System ❤️
Solve the puzzle in 5 attempts! Lives decrease with wrong answers, adding a fun challenge.

## Project Structure 📜

- **app.py** : The main Flask application that serves the puzzle and provides real-time feedback based on user input.
- **zebra.html** : The main HTML file that displays the Zebra Puzzle interface, allowing users to select options for each house.
- **output.html** : Displays the solution to the Zebra Puzzle after all clues have been logically satisfied.
- **puzzle.js** : Contains JavaScript to manage the puzzle interaction, check user answers, and update lives remaining.

## Setup 🛠️
Step-by-step instructions to set up and run the project.
### Prerequisites
- **Download Python**:
  1. Visit the [Python Download Page](https://www.python.org/downloads/) to download the latest version of Python.
  2. Follow the installation instructions for your operating system:
     - **Windows**: Run the installer, check "Add Python to PATH," and complete the installation.
     - **macOS**: Use the macOS installer or install via Homebrew (`brew install python`).
     - **Linux**: Most distributions have Python pre-installed. Use your package manager to install the latest version if needed (`sudo apt-get install python3` for Ubuntu/Debian).

- **Install Flask**:

  After installing Python, open a terminal and install Flask by running:
  
  ```bash
  pip install Flask
  
## Run the Project 🚀

- ### Clone the Repository:

    ```bash
    git clone https://github.com/yourusername/zebra-puzzle-solver.git
    cd zebra-puzzle-solver

- ### Start the Application:

    Run the Flask server by executing:

    ```bash
    python app.py
- ### Access the Application:

    Open a web browser and navigate to http://127.0.0.1:5000 to start using the Zebra Puzzle Solver.
## License 📄
  This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license. 
