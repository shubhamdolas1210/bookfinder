Book Finder Application
A simple, responsive book finder application that allows users to search for books by title and show their book images and authar names. This project was created as a take-home challenge to demonstrate skills in React, Material-UI, and API integration.

Features-
Search for Books: Enter a keyword to search for books by title.
Interactive Map: Utilizes the Leaflet library to display book-related location data on an interactive map.
Responsive Design: Optimized for mobile, tablet, and desktop screens.
Error Handling: Displays friendly error messages if there are no results or if a network error occurs.
Material-UI Integration: Uses Material-UI components for a clean and modern UI.

Technology Stack
Libary: React.js
Styling: Material-UI with custom CSS for responsiveness
API: Open Library Search API

Setup and Installation
Clone of git repository:https://github.com/shubhamdolas1210/bookfinder
Run the application locally:
npm start
The app should now be running on http://localhost:3000.

Usage
Search for Books: Use the search bar to enter a book title. Click the search button to initiate the search.
View Results: Browse through the search results displayed as book cards with title, author, and cover image.
Filter Results: Titles containing the letters 'e' or 'a' are filtered upon search or words like "all","The" and "uncle .
Responsive Layout: The app layout adjusts automatically for different screen sizes.
Project Structure
Here's an overview of the main project files:

src/
├── components/
│   ├── BookItem.jsx     // Renders individual book details
│   ├── BookList.jsx     // Renders list of BookItems
│   ├── SearchBar.jsx    // Search input and button
│   └──
├── App.tsx               // Main application component
└── index.js             // ReactDOM rendering entry
API Reference
Open Library Search API: Used for fetching book data.
Endpoint: https://openlibrary.org/search.json?title={bookTitle}
Parameters:
title: The title of the book (e.g., "Harry Potter")
Future Enhancements
User Authentication: Allow users to save their favorite books.
Enhanced Search Filters: Filter by author, genre, and year of publication.
Additional Book Details: Display extended details about each book, such as a summary or rating.

