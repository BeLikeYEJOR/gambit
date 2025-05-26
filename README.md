# Gambit

A social gaming app so you can play games with your buddies!

## Setup

```zsh
npm install
```

Create a `.env` file and set the following parameters for development:

```env
PORT=3000
```

## Games

### Libbit

1. Each player takes a turn being the judge.
2. All the non-judges will fill in the blanks of a sentence.
3. Then the judge will choose the funniest statement.
4. All the non-judges vote on which statement they think the judge will find funniest.
5. Win points by making the funniest statement and guessing which one the judge will like the most!

## UX

### Home /

![Home UX](./docs/home.drawio.svg)

Returns the homepage with a "Join Game" widget and a widget with a list of new games to choose from.

#### Join Game

The "Join" button is only enabled if a game code is entered in the textbox.

If the "Join" button is pressed, the player is navigated to the Lobby page.

#### New Game

If one of the new games is selected, the player is taken to a new Lobby page for that game (and this player is considered the "host").

### Lobby /game/{CODE}

![Lobby UX](./docs/lobby.drawio.svg)

The lobby page is where all players gather before the game starts.

#### Player Info

Each player needs to enter their name in a textbox and toggle the "Ready" switch.

Uses `PUT /api/game/{CODE}/players/{NAME}` to update the lobby with the new player or updated player name.

#### Player List Display

Displays a list of the players who are waiting to play, their "ready" status, and who is the host.

Uses `GET /api/game/{CODE}/players`

#### Start Button

Once all players are ready, the "host" can click the "Start!" button.

#### Instructions Modal

The player can click the "Instructions" button which opens up a modal displaying the instructions for the game.

Uses `GET /api/game/{GAME_TYPE_CODE}` to get the instruction text.

#### Share Modal

The player can click the "Share" button to open up a modal with a QR code and a text version of the game code.

Uses `GET /api/qr/{CODE}` to get the QR code.

### Libbit

![Libbit UX](./docs/libbit.drawio.svg)

#### Input

#### Waiting Room

#### Voting

#### View Results

#### View Votes

#### Winner Screen
