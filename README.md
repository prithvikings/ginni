## Ginni: Your Personal Ai ChatBot

# AI Chatbot using React.js and Gemini API

This project is an AI chatbot built with React.js, utilizing the Gemini API for generating responses. The chatbot is designed to provide interactive and intelligent conversations with users.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Real-time chat interface
- AI-generated responses using the Gemini API
- User-friendly design
- Recent prompts history
- Extendable and customizable

## Demo

[Insert link to live demo here]

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/prithvikings/ginni.git
    cd ginni
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file:**

    Create a `.env` file in the root directory of your project and add your Gemini API key:

    ```plaintext
    REACT_APP_GEMINI_API_KEY=your_api_key_here
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Interact with the Chatbot:**
   - Open the application in your browser.
   - Start a new chat session and interact with the chatbot.
   - View recent prompts and responses.

2. **Customizing the Chatbot:**
   - Modify the components in the `src/components` directory to customize the chatbot's appearance and behavior.
   - Update the context and API calls in the `src/context` directory to change how the chatbot interacts with the Gemini API.

## Folder Structure

Here's an overview of the main project structure:

```plaintext
ai-chatbot-react/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Main/
│   │   ├── side/
│   │   └── ...
│   ├── context/
│   │   ├── context.jsx
│   ├── config/
│   │   ├── ginni.js
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
├── .env
├── package.json
├── README.md
└── ...
