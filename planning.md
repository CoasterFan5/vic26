**Theme: Mystery**
- Defined as: something that is difficult or impossible to understand or explain.
- a novel, play, or movie dealing with a puzzling crime, especially a murder.

**High-Level Concepts:**
- The Rules are the Riddle
	- This is probably the most appealing idea
	- What do the controls do? 
- Audio or Visual Deprivation
- Narrative & Information Asymmetry
	- Unreliable narrator? 
		- You committed the crime, but your memory resets every 60 seconds, and therefore, you don't even realize it. You are solving your own crime.  
- Reverse Mystery

**The best idea so far:** 
- A unix-terminal base investigation game where you are kicked from the terminal every 60 seconds 
- Uncover the mystery of who stole the prototype
	- Once uncovered, realize it was you. You now have minutes to wipe all the evidence you came across pointing to the real criminal 
- Mystery Ideas:
	1. Find a secret hidden directory in the readme file
		1. Located in mission.md
		2. Read .secrets.md and get access to new credentials
1. Puzzle Ideas:
	1. One big question:
		   What makes a puzzle fun? 
	2. Drawing inso from escape rooms:
		1. Word Ciphers (ceaser cipher with custom letters to other letters)
		2. Solving a Sudoku puzzle to use the first row as a key
		3. A virtual map with directions that "lead" to an answer
		4. bold letters in a file
	3. Drawing inspiration from Hypixel Skyblock
		1. Three people puzzle
			1. Person A is lying, but I am not, etc. 
		2. Draw lines between points to get 5 lines through the center
		3. Tic-tac-toe against a computer
		4. A water flow puzzle
		5. Skyblock dungeons teleporting/link puzzle
	4. Drawing inspiration from other games 
		1. The connect lines game, where you can't overlap, may be hard in 60 seconds, but it may also add more challenge 
			1. May not work with the terminal interface


Game flow master plan: 
- Identify mission.md and read it
- Identify .secrets.md and read it
- Decrypt the base 64 password and log in to the logs@it.glimpse.com 
- Look around and find new files: 
	- Lore-based emails
	- Leaked Slack file with "who is admin" mystery
	- Once you find who the admin is, you will need to use their account to log in with the encrypted password from password.txt 
- In the admin account, you have to access a secret folder with a secret password hidden in memo.txt
	- Caps letter puzzle, too long to analyze in the terminal session
- Discover that you are the attacker 
	-  Decide to leak or secure the sensitive documents.
