// script.js
const subjects = ["The dog", "A pirate", "My teacher", "The scientist", "An alien"];
const verbs = ["jumps", "eats", "runs", "flies", "dances"];
const adjectives = ["funny", "angry", "quick", "brave", "silly"];
const nouns = ["spaceship", "pizza", "robot", "castle", "bicycle"];
const places = ["in the forest", "on the moon", "at school", "in the ocean", "on the mountain"];

let story = "";

function addRandomWord(type) {
    let word;
    switch(type) {
        case 'subject':
            word = subjects[Math.floor(Math.random() * subjects.length)];
            break;
        case 'verb':
            word = verbs[Math.floor(Math.random() * verbs.length)];
            break;
        case 'adjective':
            word = adjectives[Math.floor(Math.random() * adjectives.length)];
            break;
        case 'noun':
            word = nouns[Math.floor(Math.random() * nouns.length)];
            break;
        case 'place':
            word = places[Math.floor(Math.random() * places.length)];
            break;
    }
    story += word + " ";
    document.getElementById("storyText").innerText = story.trim();
}

function speakSentence() {
    const textToSpeak = story.trim();
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
}

function generateRandomStory() {
    story = `${subjects[Math.floor(Math.random() * subjects.length)]} 
             ${verbs[Math.floor(Math.random() * verbs.length)]} 
             ${adjectives[Math.floor(Math.random() * adjectives.length)]} 
             ${nouns[Math.floor(Math.random() * nouns.length)]} 
             ${places[Math.floor(Math.random() * places.length)]}`;
    document.getElementById("storyText").innerText = story;
}

function resetStory() {
    story = "";
    document.getElementById("storyText").innerText = story;
}
