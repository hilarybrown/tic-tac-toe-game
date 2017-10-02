# Hello! Welcome to Hilary's Tic-Tac-Toe Game!

## What is it?

A Single Page Application created by Hilary Brown, that hosts an interactive tic-tac-toe game, where users can log in and either play against a friend or challenge themselves in a solo practice to enhance their personal skills!

## Where Can I play?

Hilary's Tic-Tac-Toe game is hosted [here](https://hilarybrown.github.io/tic-tac-toe-game/), and the repository for it is pinned to [my own personal GitHub page](https://github.com/hilarybrown/tic-tac-toe-game).

## Game Rules

Hilary's Tic-Tac-Toe game requires users to create an account and sign in to play the game. This is necessary because the game tracks your moves to save the amount of games you play, so that you're able to access this information while signed into your account.

Once signed in, users click the New Game button to be presented with a fresh game board. User can either play under their account with a friend, by switching turns back-and-forth on the same computer, or they can play against themselves to try and find the best pattern of moves to use against future opponents.

While signed in to an account, users can play their game, access the statistic of how many games they've played, update their current password, or sign out.

## Technologies Used

Some of the technologues used in my game creation were:
- Javascript for game Logic
- jQuery for DOM manipulation and event handling
- HTML for page content
- SCSS for page styling, such as gameboard layout and color scheme
- AJAX requests for interacting with an API which allows the game to perform such functions as `CREATE` user accounts and new games, `PATCH` or update their accounts and store game moves, and much more.

## My Development Process and Problem-Solving Strategy

I decided to tackle this project by breaking each piece out into smaller portions to work on one at a time. The very first thing I did was create a grid in my HTML file that contained 3 columns and 3 rows, as my gameboard base. After all, you can't play tic-tac-toe without a gameboard, can you?

I knew that I felt confident with setting up the API authentication piece for creating a user account, updating the password to that account, and signing out of an account, so I worked on this piece first to get it out of the way for what would be my Everest: The game logic.

I am new to coding with Javascript, so I knew the game logic would be the trickiest piece for me to work on and wanted to give myself plenty of time to work through this. I started by declaring my gameboard as an empty array of 9, and declared two player variables: playerX and playerO. From there, I was able to pick apart the logic piece by piece to better focus on each smaller area. Drawing out my gameboard as an array of 9, set up as 3 rows of 3 columns helped me to better visualize the winning combinations and set up my function to determine the winner by setting If/Or statements for each of those winning scenarios. I used a similar process to determine if a game was a draw, but using If/And statements to find if the gameboard was full without a winning combination.

Once I felt comfortable with where my game logic was, I moved onto the Game API to set up the functionality of creating a new game, updating and storing the moves for the game, and getting the statistic for amount of games played under a user account. As comfortable as I felt with setting up the User Authentication API, the Game API would prove to be a much more difficult task. I struggled with clearing the gameboard for when a user would request a new game after playing a previous one. While I could get my gameboard to visually clear all of the moves off of the grid, my game was still storing the user moves, causing issues when trying to play subsequent games. I resolved the issue by adding a function to my Create Game API to set my game board back to an empty array of 9 when a new game is created, and that resolved the issue.

## Unsolved Problems

- Cannot resize game in browser
  - I created the grid for my gameboard using the bootstrap grid system, where I set a xs, sm, and md classes for each column to span 4 columns in order to keep a uniform gameboard for mobile devices, tablets, and desktop screens, respectively.
  - Unfortunately, I was unable to get my breakpoints to work correctly in order to resize my game as the screen size changed, but I hope to correct this in a future update.
- Cannot retrieve number of games won or lost by user
  - While my game can retrieve how many games a user has played under a specific account, I am not yet able to show how manys a user has won or lost.

## Wireframes

I created two wireframes for my game, one to show the initial Sign-Up/Sign-In screen, and one to display the screen in Game Play mode.

![Sign-Up/Sign-In screen](https://imgur.com/57wyhey)

![Game Play Screen](https://imgur.com/OrsnnMz)

## User Stories

- As a user, I want to be able to choose my moves and have a friend select a counter move.
- As a user, I want a game board that is clean and simple so that I'm not distracted when selecting my moves.
- As a user, I want to be able to log in and out easily so I can play new games.
- As a user, I want to view my game stats while logged into my account.
- As a user, I want to be able to log out when I am finished playing my games.
