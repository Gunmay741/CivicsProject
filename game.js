/*define the game states:
0: start
1: game
2: lose 
3: win 
*/
let game_state = 0;
let x = 600;
let y = 300;
let t1 = 600;
let t2 = 400;
let r = 0;
let n = 0;
let f = 0;
let h = 0;
function setup() {
  createCanvas(1200, 600);
  textAlign(CENTER, CENTER)
  background(135, 206, 235);
}

function draw() {
  if (game_state === 0){
    clear(); 
    background(135, 206, 235);
    textSize(40)
    text("Welcome", 600, 300);
    text("Press space to start", 600, 350)
    if (kb.presses("space")){
      game_state = 1; 
    }


  } else if (game_state === 1){
    clear(); 
    background(0,154,23); 
    fill(55, 55, 55);
    rect(0, 250, 1200, 100);
    fill(255, 255, 255);
    rect(10, 300, 70, 10);
    rect(200, 300, 70, 10);
    rect(390, 300, 70, 10);
    rect(580, 300, 70, 10);
    rect(770, 300, 70, 10);
    rect(960, 300, 70, 10);
    rect(1150, 300, 70, 10);
    textSize(70)
    text("👮", 100, 200)
    text("👮", 180, 200)
    text("👴", 1080, 500)
    text("👶", x, y)
  }
    if (kb.pressing("ArrowUp")){
       y = y - 5;
    }
    if (kb.pressing("ArrowDown")){
        y = y + 5;
     }
     if (kb.pressing("ArrowRight")){
        x = x + 5;
     }
     if (kb.pressing("ArrowLeft")){
        x = x - 5;
     }
     if (kb.pressing("t") && x < 1130 && y < 550 && x > 1030 && y > 450){
        textSize(20)
        text("Hi! My name is Jake would you like to go with me and have some candy and popcorn? (Press Y for yes and N for no)", t1, t2)
        n = 1
        h = 1
     } 
     if (kb.pressing("n") && x < 1130 && y < 550 && x > 1030 && y > 450) { 
        textSize(20); text("Oh! Ok, Sad you couldn't come", t1, t2);
        r = 1  
     }

     if (kb.presses("y") && x < 1130 && y < 550 && x > 1030 && y > 450){  
        game_state = 2
     }

     if (kb.pressing("t") && x < 230 && y < 250 && x > 50 && y > 150 && n === 0){
        textSize(20)
        text("Hi! Have you seen a suspicious person named Mike?", 300, 100)
     }
     if (kb.pressing("t") && x < 230 && y < 250 && x > 50 && y > 150 && n === 0){
        textSize(20)
        text("Hi! Have you seen a suspicious person named Mike?", 300, 100)
     }
     if (kb.presses("y") && h === 0) {
        game_state = 4
     }
     if (kb.pressing("n") && h === 0) {
      textSize(20)
      text("Oh! Alright.", 300, 100)
     }
    
     if (kb.pressing("t") && x < 230 && y < 250 && x > 50 && y > 150 && r === 1){
        textSize(20)
        text("Hi! Have you seen a suspicious person named Jake?", 300, 100)
        n = 1
     }
     if (kb.pressing("t") && x === 180 && y === 200 && r === 1){
        textSize(20)
        text("Hi! Have you seen a suspicious person named Jake?", 300, 100)
        n = 1
     }

     if (kb.presses("y") && n === 1 && x < 230 && y < 250 && x > 50 && y > 150) {
        game_state = 3
     }
     
     if (kb.presses("n") && n === 1 && x < 230 && y < 250 && x > 50 && y > 150) {
        game_state = 4
     }

   else if (game_state == 2) {
    clear(); 
    background(0,154,23);
    textSize(30) 
    text("You just got Trafficked!", 600, 300)
    text("Press space to try again", 600, 350)
    if (kb.presses("space")){
      game_state = 1; 
    }
   }

    else if (game_state == 4) {
      clear(); 
      background(0,154,23); 
      textSize(30)
      text("Why would you give the police wrong information?", 600, 300)
      text("Press space to try again", 600, 350)
      if (kb.presses("space")){
        game_state = 1; 
      }
    }  

   else if (game_state == 3) {
    clear(); 
    background(0,154,23); 
    textSize(30)
    text("Perfect! The Trafficker has been arrested!", 600, 300)
  }

  
}
