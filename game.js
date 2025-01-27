// Define the game states:
// 0: start
// 1: game
// 2: lose
// 3: win
// 5: game over by getting run over
let game_state = 0;
let p = 600;
let x = 600;
let y = 400;
let t1 = 600;
let t2 = 400;
let r = 0;
let n = 0;
let f = 0;
let h = 0;
let speed = 5;

function setup() {
  createCanvas(1200, 600);
  textAlign(CENTER, CENTER);
  background(135, 206, 235);
}

function draw() {
  clear();
  
  if (game_state === 0) {
    // Start state
    background(135, 206, 235);
    textSize(40);
    text("Welcome", 600, 300);
    text("Press space to start", 600, 350);
    if (kb.presses("space")) {
      game_state = 1;
    }

  } else if (game_state === 1) {
    // Main game state
    background(0, 154, 23);
    fill(55, 55, 55);
    rect(0, 250, 1200, 100);
    fill(255, 255, 255);
    for (let i = 0; i < 7; i++) {
      rect(10 + i * 190, 300, 70, 10);
    }
    textSize(70);
    text("👮", 100, 200);
    text("👮", 180, 200);
    text("👴", 1080, 500);
    text("👶", x, y);
    textSize(150);
    text("🌳", 1000, 100)
    text("🏎️", p, 250);

    p += speed;

    // Check if the baby is within 50 pixels of the car
    if (x < 1050 && x > 950 && y > 50 && y < 150) {
      game_state = 6;
    }
    if (abs(x - p) < 50 && y > 200 && y < 300) {
      game_state = 5;
    }

    if (p === 1200 || p === 0) {
      speed *= -1;
    }

    if (kb.pressing("ArrowUp")) y -= 5;
    if (kb.pressing("ArrowDown")) y += 5;
    if (kb.pressing("ArrowRight")) x += 5;
    if (kb.pressing("ArrowLeft")) x -= 5;

    handleInteractions();
  }

  handleEndStates();
}

function handleInteractions() {
  // Interaction with Jake or Mike
  if (kb.pressing("t") && x < 1130 && y < 550 && x > 1030 && y > 450) {
    textSize(20);
    if (n === 0 && h === 0) {
      text("Hi! My name is Jake. Would you like to go with me and have some candy and popcorn? (Press Y for yes and N for no)", t1, t2);
      n = 1;
      h = 1;
    } else if (r === 1) {
      text("Hi! Have you seen a suspicious person named Jake?", 300, 100);
      n = 1;
    }
  }

  if (kb.presses("y") && x < 1130 && y < 550 && x > 1030 && y > 450) {
    game_state = 2;
  }

  if (kb.presses("n") && x < 1130 && y < 550 && x > 1030 && y > 450) {
    textSize(20);
    text("Oh! Ok, Sad you couldn't come", t1, t2);
    r = 1;
  }

  // Interaction with Mike
  if (kb.pressing("t") && x < 230 && y < 250 && x > 50 && y > 150 && n === 0) {
    textSize(20);
    text("Hi! Have you seen a suspicious person named Mike?", 300, 100);
  }

  // Handling the responses
  if (kb.presses("y") && h === 0) {
    game_state = 4;
  }

  if (kb.pressing("n") && h === 0) {
    textSize(20);
    text("Oh! Alright.", 300, 100);
  }

  if (kb.presses("y") && n === 1 && x < 230 && y < 250 && x > 50 && y > 150) {
    game_state = 3;
  }

  if (kb.presses("n") && n === 1 && x < 230 && y < 250 && x > 50 && y > 150) {
    game_state = 4;
  }
}

function handleEndStates() {
  if (game_state === 2) {
    // Lose state
    background(0, 154, 23);
    textSize(30);
    text("You just got Trafficked!", 600, 300);
    text("Press space to try again", 600, 350);
    if (kb.presses("space")) {
      game_state = 1;
    }

  } else if (game_state === 4) {
    // Incorrect information state
    background(0, 154, 23);
    textSize(30);
    text("Why would you give the police wrong information?", 600, 300);
    text("Press space to try again", 600, 350);
    if (kb.presses("space")) {
      game_state = 1;
    }

  } else if (game_state === 3) {
    // Win state
    background(0, 154, 23);
    textSize(30);
    text("Perfect! The Trafficker has been arrested!", 600, 300);

  } else if (game_state === 5) {
    // Game over state (run over)
    background(0, 154, 23);
    textSize(30);
    text("You got run over", 600, 300);
}else if (game_state === 6) {
    // Game over state (run over)
    background(0, 154, 23);
    textSize(30);
    text("You got crushed by a falling tree", 600, 300);
}
}
