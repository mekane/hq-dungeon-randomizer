## Dungeon Map Randomizer

This is a hobby project to mess around with procedurally generating random dungeons maps for a specific game board.

It is divided into three parts:

1. Config: randomizes the configuration of the procedural generator so you can customize what gets generated.

2. Generator: takes a config and spits out the random room layout. Uses path-finding to confirm that there's a valid path from the start to the finish.

3. Map Display: a web app (written in React + TypeScript) that takes a room layout and displays an interactive map.

## Future Enhancements:

3a. Enhance the map view so it can be in "Play" mode. It should show the entrance only to begin and then reveal additional rooms on click. This would allow a solo player to explore the map without seeing the entire thing first.

4. Populator: add a module that takes a room layout and a config and puts random furniture and monsters in the rooms.

## Config

Configuration is an object that has the following structure. Note that they are ordered most-specific to least specific, where including a more specific (higher up) setting will cause the ones below it to be ignored.


```TypeScript
{
  quadrants: [0,1,2,3] 
  rooms: [n, n, n]
  size: "small" | "medium" | "large" | "huge"    
  seed: <number>
}
```
