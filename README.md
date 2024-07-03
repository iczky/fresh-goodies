# Fresh Goodies

Welcome to the Fresh Goodies project! This application helps you manage and discover fresh products with ease. Built with modern technologies to ensure a seamless user experience.

## Features

- **Next.js**: A React framework for server-rendered applications and static websites.
- **TypeScript**: A statically typed superset of JavaScript for improved code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **useContext**: Utilized for state management to provide a product and category to apply filtering.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/iczky/fresh-goodies.git
    cd fresh-goodies
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. **Run the dummy backend**:
    ```bash
    yarn db
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Filtering Product by Category

The app utilize data pass from custom hook that build using `useContext` to hold context for each page.

### State Management

The app uses the `useContext` hook for state management. This approach simplifies the process of passing state and dispatch functions throughout the component tree, making the code more maintainable.
