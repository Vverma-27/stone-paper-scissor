A stone paper scissor game created in React with typescript and redux toolkit. The AI algorithm tries to determine if the user is playing by a set pattern. If user is not playing by a set pattern it returns a random move.
There are 3 conditions for the user pattern:

1. Whether user changes his move after winning a round
2. Whether user changes his move after losing a round
3. Whether user changes his move after a draw
   These 3 conditions are evaluated based on whether user has done it for more than 50% of the particular condtion.
   for eg: if user has changed move after winning for atleast 2 times if he has won 4 times.
