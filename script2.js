// This is the game's data structure, holding the story text, choices, and outcomes.
let gameData = {
    "entryway": {
        "text": "You stand in a dusty entryway. A heavy oak door leads north, and a creaky staircase winds upward to the east. To the south, you see a faint glimmer of light coming from under the door.",
        "choices": {
            "north": "garden",
            "east": "library",
        }
    },
    "garden": {
        "text": "The garden is overgrown with lush vegetation. You spot a glint of gold hidden beneath a rosebush. After some careful searching, you discover a small key. To the east, you see the library. To the south, you see the entryway.",
        "choices": {
            "east": "library",
            "south": "entryway",
            "inspect rosebush": "riddle_1"
        }
    },
    "riddle_1": {
        "text": "As you inspect the rosebush, a voice whispers, 'I get wet while drying?' What am I?",
        "choices": {
            "sponge": "sponge",
            "towel":"towel",
            "tree":"incorrect1",
            "book":"incorrect1"

        }
    },
    "towel": {
        "text": "You have got the riddle correct. Well done as a reward text the word 'cheese' to me for a reward",
        "choices": {
            "go back": "garden"
        }
    },
    "sponge": {
        "text": "You have got the riddle correct. Well done as a reward text the word 'cheese' to me for a reward",
        "choices": {
            "go back": "garden"
        }
    },
    "incorrect1": {
        "text": "You have got the riddle incorrect.",
        "choices": {
            "go back": "garden"
        }
    },
    "library": {
        "text": "If you have come from the greenhouse you are correct, books speak to all yet have no voice, solve the anagram using the last letters of these messages and send it to me for a reward. The library is filled with dusty bookshelves reaching up to the high ceilings. You notice a hidden door behind one of the bookshelves. To the west, you see the greenhouse. To the south, you see the entryway.FOY",
        "choices": {
            "west": "greenhouse",
            "south": "entryway",
            "hidden door": "basement",
            "read book": "study"
        }
    },
    "greenhouse": {
        "text": "The greenhouse is filled with exotic plants. A strange talking plant approaches you and says, 'To unlock the hidden treasure, you must solve my riddle: What has no voice, yet speaks to all?' To the east, you see the library. To the south, you see the study.EMB",
        "choices": {
            "east": "library",
            "south": "study",
        }
    },
    "study": {
        "text": "The study is filled with old books and scrolls. North to the greenhouse. South or try to look for more stuff.",
        "choices": {
            "north": "greenhouse",
            "read more": "love_letter"
        }
    },
    "love_letter": {
        "text": "You find a hidden compartment in one of the books. Inside, there's a love letter addressed to you from Aria, a mysterious person you've never met. The letter expresses deep affection and admiration for your bravery.",
        "choices": {
            "north": "study",
            "reply": "reply_letter"
        }
    },
    "reply_letter": {
        "text": "You decide to write a reply to Aria's letter expressing your feelings. You tuck the letter into the book, hoping it finds its way to her. You notice some stairs on your left",
        "choices": {
            "north": "study",
            "stairs":"attic"
            
        }
    },
    "basement": {
        "text": "The basement is damp and musty. You see a large treasure chest in the corner. However, it is locked. You notice a keyhole on the front.",
        "choices": {
            "unlock with key": "treasure",
            "north": "library",
        }
    },
    "treasure": {
        "text": "Congratulations! You've unlocked the treasure chest and found riches beyond your wildest dreams!",
        "choices": {
            "Head Forward":"gallery",
            "Turn to the door to the left":"hallway"
        }
    },
    "secret_tunnel": {
        "text": "The secret tunnel leads you outside the mansion. You have escaped! Congratulations! You have completed your adventure.",
        "choices": {}
    },
    "the_end": {
        "text": "Thank you for playing, {name}! You have completed your adventure.",
        "choices": {}
    },
    // New rooms
    "attic": {
        "text": "You climb up to the attic, filled with cobwebs and old furniture. Among the dust, you find a mysterious locked chest.",
        "choices": {
            "unlock with key": "attic_treasure",
            "search for key": "riddle_2",
            "go back": "entryway",
            "look out the window":"window"
        }
    },
    "window": {
        "text": "You peer out the window enjoying the beautiful blue sky. You notice a black iron platform to the right of you. ",
        "choices": {
            "Try to climb onto it": "climbing",
            "go back": "attic"
        }
        
    },
    "climbing": {
        "text": "You climb out thr ush of wind against your face, you stare up too scared to look down and shimmy along the pipes",
        "choices": {
            "you shimmy along": "balcony",
        }
    },
    "riddle_2": {
        "text": "You search the attic for a key, and you stumble upon a parchment with a riddle: 'I can be cracked, made, told, and played. What am I?'",
        "choices": {
            "joke": "joke",
            "stick":"incorrect2",
            "prank":"incorrect2",
            "story":"incorrect2",
            "go back": "attic"
        }
    },

    "joke": {
        "text": "You have got the riddle correct. Well done as a reward text the word 'pastry' to me for a reward",
        "choices": {
            "go back": "attic"
        }
    },
    "incorrect2": {
        "text": "You have got the riddle incorrect.",
        "choices": {
            "go back": "attic"
        }
    },

    "attic_treasure": {
        "text": "You unlock the chest and find ancient artifacts and a map leading to a hidden chamber beneath the mansion.",
        "choices": {
            "follow the map": "hidden_chamber",
            "leave it": "attic"
        }
    },
    "hidden_chamber": {
        "text": "Following the map, you discover a hidden chamber filled with ancient runes and mysterious artifacts.",
        "choices": {
            "inspect artifacts": "riddle_3",
            "return to attic": "attic"
        }
    },
    "riddle_3": {
        "text": "As you inspect the artifacts, a voice echoes through the chamber, 'What can you hear but not see or touch even though u control it' What am I?",
        "choices": {
            "voice": "voice",
            "hormones": "incorrect3",
            "feelings":"incorrect3"

        }
    },
    "voice": {
        "text": "You have got the riddle correct. Well done as a reward text the word 'eat' to me for a reward",
        "choices": {
            "go back": "attic"
        }
    },
    "incorrect3": {
        "text": "You have got the riddle incorrect.",
        "choices": {
            "go back": "attic"
        }
    },

    "hallway": {
        "text": "You find yourself in a dimly lit hallway. Dusty portraits line the walls, and eerie whispers fill the air.",
        "choices": {
            "investigate whispers": "riddle_4",
            "continue forward": "dining_room",
            "go back": "entryway"
        }
    },
    "riddle_4": {
        "text": "The whispers grow louder, forming a riddle: 'I am often following u and copying your every move. yet you cannot touch me' What am I?",
        "choices": {
            "shadow": "shadow",
            "reflection":"incorrect4",
            "go back": "hallway"
        }
    },
    "shadow": {
        "text": "You have got the riddle correct. Well done as a reward text the word 'I' to me for a reward",
        "choices": {
            "go back": "hallway"
        }
    },
    "incorrect4": {
        "text": "You have got the riddle incorrect.",
        "choices": {
            "go back": "hallway"
        }
    },

    "dining_room": {
        "text": "You enter a grand dining room with a long table set for a feast. A chandelier flickers overhead, casting eerie shadows.",
        "choices": {
            "inspect chandelier": "riddle_5",
            "go to kitchen": "kitchen",
            "go back": "hallway",
            "Turn Right":"right"
        }
    },
    "right":{
        "text":"You find a seam in the back of the wall",
        "choices":{
            "push":"moral_dilemma",
            "go back":"kitchen"
        }
        
    },
    "riddle_5": {
        "text": "As you inspect the chandelier, a voice whispers, 'I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?'",
        "choices": {
            "fire": "fire",
            "plant":"incorrect5",
            "acid":"incorrect5",
            "go back": "dining_room"
        }
    },
    "fire": {
        "text": "You have got the riddle correct. Well done as a reward text the word 'today' to me for a reward",
        "choices": {
            "go back": "dining_room"
        }
    },
    "incorrect5": {
        "text": "You have got the riddle incorrect.",
        "choices": {
            "go back": "dining_room"
        }
    },

    "kitchen": {
        "text": "You step into the kitchen, filled with the aroma of forgotten meals. Pots and pans hang from hooks, and a stove sits cold and unused.",
        "choices": {
            "inspect stove": "riddle_6",
            "go to dining room": "dining_room",
            "explore pantry": "pantry"
        }
    },
    "riddle_6": {
        "text": "As you inspect the stove, you notice a cryptic message etched into the metal: 'The more you take, the more you leave behind.' What am I?",
        "choices": {
            "footsteps": "footsteps",
            "lovers":"incorrect6",
            "bodies":"incorrect6",
            "go back": "kitchen"
        }
    },
    "footsteps": {
        "text": "You have got the riddle correct. Well done as a reward text the word 'tasty' to me for a reward",
        "choices": {
            "go back": "kitchen"
        }
    },
    "incorrect6": {
        "text": "You have got the riddle incorrect.",
        "choices": {
            "go back": "kitchen"
        }
    },

    "pantry": {
        "text": "You explore the pantry, filled with jars of preserved fruits and vegetables. In the corner, you spot a locked chest.",
        "choices": {
            "unlock with key": "pantry_treasure",
            "go back": "kitchen"
        }
    },
    "pantry_treasure": {
        "text": "You unlock the chest and find rare spices and a family heirloom.",
        "choices": {
            "take it": "pantry",
            "leave it": "pantry"
        }
    },
    // Additional rooms
    "gallery": {
        "text": "You find yourself in an art gallery, adorned with magnificent paintings and sculptures. One painting catches your eye—a portrait of a mysterious woman with hauntingly beautiful eyes.",
        "choices": {
            "inspect painting": "riddle_7",
            "explore further": "hallway",
            "go back": "hallway"
        }
    },
    "riddle_7": {
        "text": "As you inspect the painting, you notice a cryptic inscription at the bottom: 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?'",
        "choices": {
            "pencil": "pencil",
            "go back": "gallery",
            "glasses":"incorrect7",
            "phone":"incorrect7"
        }
    },
    "pencil": {
        "text": "You have got the riddle correct. Well done as a reward text the word 'cheese' to me for a reward",
        "choices": {
            "go back": "gallery"
        }
    },
    "incorrect7": {
        "text": "You have got the riddle incorrect.",
        "choices": {
            "go back": "gallery"
        }
    },

    "balcony": {
        "text": "You step out onto a balcony overlooking the mansion's sprawling gardens. The moon casts a soft glow, and a gentle breeze rustles through the trees.",
        "choices": {
            "admire view": "romance_dialogue",
            "return inside": "entryway"
        }
    },
    "romance_dialogue": {
        "text": "As you admire the view, Aria appears beside you. She smiles warmly, her eyes sparkling in the moonlight. 'It's a beautiful night,' she says softly. 'Thank you for being here with me.'",
        "choices": {
            "express feelings": "express_feelings",
            "change subject": "change_subject"
        }
    },
    "express_feelings": {
        "text": "You gather your courage and express your feelings to Aria, telling her how much she means to you. She blushes and takes your hand, her smile turning into a grin. 'I've been waiting for you to say that,' she whispers.",
        "choices": {
            "embrace": "the_end"
        }
    },
    "change_subject": {
        "text": "You decide to change the subject, not wanting to rush things with Aria. You engage in light conversation, enjoying each other's company.",
        "choices": {
            "continue conversation": "continue_conversation"
        }
    },
    "continue_conversation": {
        "text": "You continue talking with Aria, sharing stories and laughter. As the night wears on, you feel a deep connection forming between you.",
        "choices": {
            "embrace": "the_end"
        }
    },
    "moral_dilemma": {
        "text": "You stumble upon a scene of two people arguing. One pleads for your help, claiming innocence, while the other accuses them of theft. You must decide whom to believe.",
        "choices": {
            "believe first person": "forgiveness",
            "believe second person": "justice",
            "stay neutral": "neutral"
        }
    },
    "forgiveness": {
        "text": "You choose to believe the first person and offer forgiveness. They express gratitude, and the conflict resolves peacefully.",
        "choices": {
            "move on": "hallway"
        }
    },
    "justice": {
        "text": "You side with the second person and demand justice. After further investigation, the truth emerges, and the guilty party is apprehended.",
        "choices": {
            "move on": "hallway"
        }
    },
    "neutral": {
        "text": "You remain neutral, unwilling to make a judgment without more evidence. The situation escalates, and you're forced to intervene to prevent violence.",
        "choices": {
            "move on": "hallway"
        }
    }
};

// Get references to the HTML elements
const storyText = document.getElementById("story-text");
const choicesElement = document.getElementById("choices");
let visitedRooms = [];
let previousRoom = null;

// Function to start the game
function startGame() {
    let currentRoom = "entryway";
    let playerName = prompt("What is your name, brave adventurer?");

    // Display the starting room's text
    storyText.textContent = `${playerName}, ${gameData[currentRoom].text}`;
    displayChoices(currentRoom);
}

// Function to display choices for the current room
function displayChoices(roomName) {
    choicesElement.innerHTML = ""; // Clear previous choices

    for (let choice in gameData[roomName].choices) {
        let choiceButton = document.createElement("button");
        choiceButton.classList.add("choice-button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", function() {
            handleChoice(roomName, choice);
        });
        choicesElement.appendChild(choiceButton);
    }
}

// Function to handle player's choice
function handleChoice(roomName, choice) {
    let nextRoom = gameData[roomName].choices[choice];

    // Check if the next room has been visited before
    if (visitedRooms.includes(nextRoom) && !nextRoom.startsWith("riddle_")) {
        storyText.textContent = "You've already been here. There's nothing new to discover.";
        // Return the player to the previous room
        returnToPreviousRoom();
    } else {
        // Update the story text and choices
        storyText.textContent = gameData[nextRoom].text;
        displayChoices(nextRoom);

        // Add the current room to the list of visited rooms
        visitedRooms.push(roomName);
        previousRoom = roomName;

        // Check if the game has ended
        if (nextRoom === "the_end") {
            alert("The game has ended!");
        }
    }
}

// Function to return the player to the previous room
function returnToPreviousRoom() {
    if (previousRoom !== null) {
        let temp = visitedRooms.pop(); // Remove the current room from visited rooms
        let currentRoom = previousRoom;
        previousRoom = temp; // Set previous room as the current room
        handleChoice(currentRoom, ''); // Re-display choices for the previous room
    } else {
        alert("You can't return to the previous room as there's no previous room recorded.");
    }
}

startGame();
