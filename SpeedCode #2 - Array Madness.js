SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.



function arrayMadness(a, b) {
  return [...a].reduce((x,y)=>x+y**2,0) > [...b].reduce((x,y)=>x+y**3,0);
}
