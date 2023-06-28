# Project Readme

This project is a React application that allows users to interact with a cat collection. It includes features such as displaying cat images, adding new cats to the collection, searching for specific cats, and viewing detailed information about individual cats. The project uses React Router for navigation and Semantic UI for styling.

## Prerequisites

Before running the project, ensure that you have the following dependencies installed:

- React
- ReactDOM
- react-router-dom
- semantic-ui-css

## Getting Started

1. Clone the project repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Install the project dependencies by running the following command:
   ```
   npm install
   ```
4. Once the dependencies are installed, you can start the application with the following command:
   ```
   npm start
   ```
   This will launch the application in your default web browser. If it doesn't open automatically, you can access it at [http://localhost:3000](http://localhost:3000). update: the db.json has been deployed through rendering: https://cats-json-database.onrender.com/cats

## Project Structure

The project directory structure is organized as follows:

- **`/components`**: Contains reusable React components used throughout the application.
- **`/pages`**: Contains individual page components that define the content for different routes.
- **`/images`**: Contains image assets used in the application.
- **`/index.css`**: CSS styles specific to the index page.
- **`/App.js`**: The main component that serves as the entry point for the application.
- **`/CatNavBar.js`**: Component for displaying the navigation bar at the top of the application.
- **`/Counter.js`**: Component for displaying a counter.
- **`/LoginShowmodal.js`**: Component for displaying a login modal.
- **`/CatCollection.js`**: Component for displaying the collection of cats.
- **`/CatAddForm.js`**: Component for adding a new cat to the collection.
- **`/CatSearch.js`**: Component for searching cats in the collection.
- **`/DisplayCat.js`**: Component for displaying detailed information about a specific cat.
- **`/HomePage.js`**: Component for the home page of the application.
- **`/CatPage.js`**: Component for the cat collection page.

## Routes

The application uses React Router to handle different routes. The following routes are defined:

- **`/`**: Home page route, displays the `HomePage` component.
- **`/cats`**: Cat collection route, displays the `CatPage` component.
- **`/tictactoe`**: Tic-tac-toe game route, displays the `TicTacToe` component.
- **`/cats/:id`**: Route for displaying detailed information about a specific cat, displays the `DisplayCat` component.

## Contributing

If you'd like to contribute to this project, you can follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Make the necessary changes in your branch.
4. Test your changes to ensure they work as expected.
5. Commit your changes and push them to your forked repository.
6. Submit a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was developed using React and various React libraries.
- The project uses the Semantic UI CSS framework for styling.
- Cat images are sourced from external resources.
