# IRCTC Clone

## Description

The IRCTC Clone is a web application that mimics the functionality of the Indian Railway Catering and Tourism Corporation (IRCTC) website. This platform allows users to search for train schedules, book tickets, and manage their bookings. It aims to provide a seamless experience for users looking to travel via Indian Railways.

## Features

- **User  Authentication**: Secure login and registration for users to manage their bookings.
  
- **Train Search**: Users can search for trains based on source, destination, and date of travel.
  
- **Booking Management**: Users can book tickets, view their bookings, and cancel tickets if needed.
  
- **Responsive Design**: The application is designed to be fully responsive, ensuring a smooth experience on both desktop and mobile devices.

## Technologies Used

- **JavaScript**: For client-side scripting and interactivity.
  
- **HTML/CSS**: For structuring and styling the web pages.
  
- **React**: JavaScript library for building user interfaces.
  
- **Vite**: Build tool that provides a fast development environment.
  
- **Firebase**: For user authentication and real-time database services.

## Project Structure
```
IRCTC-Clone/
├── public/                  # Public assets
│   ├── index.html           # Main HTML file
│   └── ...                  # Other public assets
├── src/                     # Source files
│   ├── components/          # React components
│   ├── pages/               # Page components
│   ├── firebase.js          # Firebase configuration and initialization
│   ├── App.js               # Main application component
│   └── index.js             # Entry point for React
├── .gitignore               # Git ignore file
├── README.md                # Project documentation
├── eslint.config.js         # ESLint configuration
├── package.json             # Project metadata and dependencies
└── vite.config.js           # Vite configuration
```


## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/content-cn/IRCTC-Clone.git
   ```
2. Navigate to the project directory:
  ```bash
cd IRCTC-Clone
```
3. Install the dependencies:
  ```bash
npm install
```
4. Set up Firebase:

Create a Firebase project in the Firebase Console.
Enable Authentication and set up the sign-in methods you want to use (e.g., Email/Password).
<br>
Create a Firestore database if needed for storing booking data.
Copy your Firebase configuration and add it to firebase.js.


5. Run the application:
  ```bash
npm run dev
```
6. Open your web browser and go to http://localhost:5173 to access the application.
### API Integration
The application may use third-party APIs to fetch train schedules and availability. Ensure to configure the API endpoints in the application as needed.
```bash
ttps://mocki.io/v1/41189c39-e55b-4b7d-a236-529edfb9d3af
```
