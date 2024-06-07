# Boardgame Companion App

Welcome to the Boardgame Companion App repository! This project is developed as a part of my bachelor's project to create a digital companion app for a board game. This README will guide you through the project, its features, and how to get started.

## Overview

The Boardgame Companion App aims to enhance the gaming experience of [Boardgame Name] by providing players with digital tools and utilities. Whether you're a seasoned player or new to the game, this app strives to make gameplay smoother and more enjoyable.

## Features

### 1. Rulebook Access
Easily access the rulebook of the game within the app. No more flipping through pages or searching for rules during gameplay.

### 2. Score Tracking
Keep track of scores for all players in real-time. The app automatically calculates and updates scores, saving players from manual calculations.

### 3. Interactive Quests
Embark on interactive quests that add a new dimension to the gameplay experience. Complete challenges, gather resources, and make strategic decisions to advance in the game.

### 4. Fight System
Engage in dynamic battles with opponents or in-game adversaries. Utilize different tactics and abilities to emerge victorious and claim your rewards.

### 4. Requirements & Setup

Requirements:
-Lan (Local Area Network) -> for playing with different devices.
-Node.js (Javascript Runtime)

Setup:
-Pull project: "git pull https://github.com/WUOYD/ba_boardgame.git"
-Navigate to root of project: cd ../
-Install Packages: npm i
-Run Server: "node src/server.js"
-Run Vite: "npm run dev" or "npm run dev -- --host" for hosting it over local device ip address.
-Open the link in Vite tab (http://localhost:5173/ or http://"IPAdress":5173/)

Important:
-The game can only be started with at least 2 players and maximum 4 players.
-When the server breaks -> stop it with "CTRL + R" and restart it with "node src/server.js"
-When starting a new game press "reset server" on titlescreen to flush old data.


