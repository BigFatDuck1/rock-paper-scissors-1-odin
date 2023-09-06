# Rock Paper Scissors
## https://bigfatduck1.github.io/rock-paper-scissors-odin/
***
### My approach

1. Set up the layout in flexbox: nearly everything is arranged in columns, except for the two rock/paper/scissors icon columns which are arranged side by side. This is downe with ```css flex-direction: row``` (I know the default value is row but I specified it for the sake of clarity) and ```css justify-content: space-around```.
2. Changed all player icons into buttons and added hover effects as well as a focus state after the player has clicked onto one choice
3. Added an event listener to the button so the button communicates what choice the player has made
4. Javascript code that handles the "AI" for the game e.g. randomizing computer choice, tracking player score, determining who won etc., remains unchanged
5. Added a red highlight that shows what choice the computer has made
6. The scoreboard flickers slightly when it updates e.g. if the player has won, the text flickers green. This is accomplished with a   ```js setTimout()``` function and adding then removing a "flicker" class on CSS.
7. Restart button simply does a ```js location.reload()``` because I was lazy. 