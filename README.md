# Tuner App 🎶

Tuner App is a full-stack application that allows users to manage their song collection. Users can view, add, edit, and delete songs, as well as mark their favorite songs.

<br/>
<p align="center">
    <img width="80%" src="./src/Components/DBA6D932-7BBC-4931-9C14-300F327B2C16.jpeg">
</p>
<br/>

## Features

- **CRUD Operations**: Create, Read, Update, Delete songs.
- **Favorite Songs**: Mark songs as favorites and toggle the favorite status directly from the index page.
- **Responsive Design**: Uses Bootstrap for styling.
- **Page Transitions**: Smooth page transitions using `react-transition-group`.
- **404 Page**: Custom 404 page for unknown routes.
- **Confirmation Prompt**: Confirmation prompt before deleting a song.

<br/>
<p align="center">
    <img width="80%" src="./src/Components/42C48FC8-F205-4C42-93D8-06307FE8A7D0.jpeg">
</p>
<br/>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Installation


1. Clone the repository:
   ```sh
   git clone https://github.com/kbodur/tuner-app-frontend.git
   cd tuner-app-frontend
## Install dependencies:
npm install

## Create a .env file and add your environment variables:
VITE_BASE_URL=http://localhost:3345

## Run the server:
npm run dev

## Usage
  . Navigate to http://localhost:3345 in your browser to use the Tuner App.
  . Use the navigation bar to view all songs or add a new song.
  . Click on a song's name to view its details.
  . Use the edit button on the song detail page to update the song's information.
  . Click the delete button to remove a song (a confirmation prompt will appear).
  . Toggle the favorite status by clicking on the star icon in the songs list.


## API Endpoints
Songs
  . GET /songs: Get all songs.
  . POST /songs: Add a new song.
  . GET /songs/:id: Get a single song by ID.
  . PUT /songs/:id: Update a song by ID.
  . DELETE /songs/:id: Delete a song by ID.


## Components
  . NavBar
   -Navigation bar with links to the songs list and add new song page.

  . Song
   -Component to display individual song details with a clickable star to toggle the favorite status.

  . SongDetails
   -Component to display detailed information about a song with options to edit or delete the song.

  . SongEditForm
  -Form to edit the details of a song.

  . SongNewForm
  -Form to add a new song.

  . Songs
  -Component to display a list of all songs in a table format.

  . Layout
  -Component implementing the Holy Grail Layout.

## Contributing
   . Fork the repository.
   . Create a new branch (git checkout -b feature-branch).
   . Make your changes.
   . Commit your changes (git commit -m 'Add some feature').
   . Push to the branch (git push origin feature-branch).