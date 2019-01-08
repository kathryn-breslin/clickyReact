# Plant Picker
#### Click an image once and try not to click it again! If an image is chosen twice, the game will start over and your score will go to 0. If you make it to the end of the round without choosing the same image twice, your score will increase!

## About
Plant Picker is a memory game built with React. The app renders different images to the screen; each image listens for click events and simultaneuosly tracks the user's score. The user's score increments when an image is clicked for the first time. Each time an image is clicked, the images rendered to the page shuffle in a random order. The user's score resets to 0 and the game restarts if they click the same image more than once. 

The application's UI is broken down into lightweight and resuable **React** components. This app is structured to manage component state and respond to user events.