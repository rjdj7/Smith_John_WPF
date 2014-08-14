// John Smith
// 08/13/14
// Expressions Wacky

// You're a zombie slayer. How many have you killed? Total killed. Chances of animating 1 in 2. Zombies in the US. 

// Declaring some prompts:
var zombiePop = 200000000;
var zombiesKilled = prompt("There are 200 million zombies in the US. You're a zombie slayer. How many have you killed?");
var humansKilled = prompt("The undead aren't the only threat out there...How many of the living have you killed?");

// Declaring the forumla for total killed, which is the zombies plus the humans that user has killed. Also, added alert for this:
var totalKilled = zombiesKilled + humansKilled;
alert("Wow. So you've killed a total of " + totalKilled);

// Adding variable for the number of humans to be reanimated. 
var humansReanimated = humansKilled / 2; 

// Adding new zombie population after the zombies killed have been subtracted and the humans reanimated have been added:
var zombiePopNew = zombiePop - zombiesKilled + humansReanimated;