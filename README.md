here's how to run this project

make sure to add your own MongoDB url because most of the time local url fails to connect
```
# React JS and Node JS Login/Register Project

Welcome to the React JS and Node JS Login/Register Project! This project is a simple implementation of a login and registration system built with React JS for the front-end and Node JS for the back-end. It also includes a protected dashboard route.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/react-node-login-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Quantum-Assignment
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

4. Start the frontend and backend servers:
   ```bash
   # In the frontend directory
   npm start
   
   # In the backend directory
   nodemon index.js
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Features

- **User Authentication**: Users can register for a new account and login with their credentials.
- **Protected Dashboard**: Access to the dashboard is restricted. Users must be logged in to access it.
- **Session Management**: User sessions are managed securely to maintain login state.

## Technologies Used

- **React JS**: A JavaScript library for building user interfaces.
- **Node JS**: A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.
- **Express**: A minimal and flexible Node JS web application framework.
- **MongoDB**: A NoSQL database used to store user information.
- **JWT (JSON Web Tokens)**: Used for securely transmitting information between parties as a JSON object.

## Folder Structure

```
react-node-login-project/
├── frontend/             # Frontend React JS code
├── backend/             # Backend Node JS code
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, you can fix this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was developed as an assignment for [Company Name] internship program.

```

Feel free to customize it further according to your project's specifics and requirements!
