function setup() {
  createCanvas(400, 400);
  
  player = new Player();
  
  loot = new Loot();
  
  scene = 'menu';
  
  
  //buttons
  // Mneu buttons ////////////////////
  battleButton = createButton('Battle');
      battleButton.size(100,30);
      battleButton.position(width-battleButton.width >> 1, height - battleButton.height >> 1);
      battleButton.mousePressed(function() {resetButtons(); showButtons('battleselect'); scene = 'battlemenu'});
  battleButton.hide();
  
  //BattleSelectButtons
   
    testdummyButton = createButton('Plains (Lv 1)');
      testdummyButton.size(100,30);
      testdummyButton.position(width/3 - testdummyButton.width/2, height - testdummyButton.height >> 1);
      testdummyButton.mousePressed(function() {startBattle(1,1);});
  testdummyButton.hide();
  
  plainsButton = createButton('Plains (Lv 1-5)');
      plainsButton.size(100,30);
      plainsButton.position(width*2/3 - plainsButton.width/2, height - plainsButton.height >> 1);
      plainsButton.mousePressed(function() {startBattle(1, int(random(1,5)));});
  plainsButton.hide();
  
  MenuButtons = [battleButton];
  BattleSelectButtons = [testdummyButton, plainsButton]
  
  // battle buttons ///////////////////////
  var btnsize = 100;
  var l = (width - (3*btnsize))/7;
  var m = 2*l;
  
  battle_hplength = 150;
  battle_l =( width - (battle_hplength*2) )/ 3;
  p_center = battle_l + (0.5*battle_hplength);
  e_center = (battle_l*2) + (1.5*battle_hplength);
  
  
  attackButton = createButton('Attack');
      attackButton.size(btnsize,btnsize/2);
      attackButton.position(m + btnsize + l, height*3/4);
      attackButton.mousePressed(function() {fight();});
  attackButton.hide();
  
  itemButton = createButton('Item');
      itemButton.size(btnsize,btnsize/2);
      itemButton.position(m, height*3/4);
      itemButton.mousePressed(function() {startBattle(1);});
  itemButton.hide();
  
  runButton = createButton('Run');
  runButton.size(btnsize,btnsize/2);
  runButton.position(m + 2*(btnsize + l), height*3/4);
  runButton.mousePressed(function() {startBattle(1);});
  runButton.hide();
  

  BattleButtons = [attackButton, itemButton, runButton];
  
  // Loot buttons ///////////////////////
   btnsize = 120;
  
  
  
      pickcurButton = createButton('Keep Old');
      pickcurButton.size(btnsize,btnsize/2);
      pickcurButton.position((-btnsize/2) + width/4, height*3/4);
      pickcurButton.mousePressed(function() {player.claimLoot(0);});
      pickcurButton.hide();
  
      picknewButton = createButton('Take New');
      picknewButton.size(btnsize,btnsize/2);
      picknewButton.position((-btnsize/2) + width*3/4, height*3/4);
      picknewButton.mousePressed(function() {player.claimLoot(1);});
      picknewButton.hide();
  
  
  

      LootButtons = [pickcurButton, picknewButton];
  
}

function draw() {
  background(220);
  
  switch(scene) {
      
    case 'menu':
      push();
      textAlign(CENTER);
      textSize(30);
      text('Main Menu', width/2,height*1/4);
      
      battleButton.show();
      
      textSize(20);
      text("Press 'i' for inventory", width/2, height*3/4);
      pop();
      break;
      
      
    case 'character':
      push();
      player.show('items');
      
      pop();
      break;
      
      
      
    case 'battlemenu':
      push();
      textAlign(CENTER);
      textSize(30);
      text('Battle Menu', width/2,height*1/4);
      
      plainsButton.show();
      
      textSize(20);
      text("Press 'i' for inventory", width/2, height*3/4);
      pop();
      break;
      
      
      
      
      
    case 'battle': //battle //////////////////////////////
      push();
      textAlign(CENTER);
      textSize(30);
      text('Fight!', width/2,height*1/8);
      
      //hpbars
      //p //
      push();
      fill (155);
      rect(battle_l, height/2, battle_hplength, battle_hplength/5);
      
      fill(102,255,102);
      noStroke();
      rect(battle_l, height/2, (player.totalHp / player.totalHpmax) * battle_hplength ,battle_hplength/5 );
      pop();
      
      push();
      textSize(20);
      text(p_battle_txt, p_center, (height/2) - (2*textSize()));
      text(player.totalHp + ' / ' + player.totalHpmax,p_center, (height/2) + (((battle_hplength/5) + textSize()/2)/2));
      pop();
      
      //e //
      push();
      fill (155);
      rect(battle_l*2 + battle_hplength, height/2, battle_hplength, battle_hplength/5);
      fill(225,102,102);
      
      noStroke();
      rect(battle_l*2 + battle_hplength, height/2, (enemy.hp / enemy.hpmax)* battle_hplength,battle_hplength/5 );
      pop();
      
       push();
      textSize(20);
      text(e_battle_txt, e_center, (height/2) - (2*textSize()));
      text( enemy.hp + ' / ' + enemy.hpmax, e_center, (height/2) + (((battle_hplength/5) + textSize()/2)/2));
      pop();
      
      
      
      
      
      
      pop();
      break;
      
      
      
      
    case 'loot': //looooooooooooooooooooooooooooooooooooooot 
      push();
      textAlign(CENTER);
      textSize(30);
      text('Loot!', width/2, height/10);
      
      textSize(20);
      curitem = player.curitem;
      tempx = width/4;
      tempy = height/2;
      tempsize = 100;
      
      //cur item
      rectMode(CENTER);
      fill(curitem.col);
      rect(tempx,tempy,tempsize,tempsize);
      //text
      textAlign(LEFT); 
      fill(0);
      text('Current: ', tempx - (tempsize/2) + textSize()/5,tempy  - (tempsize/2) - textSize());
      text(curitem.statText,tempx - (tempsize/2) + textSize()/5,tempy  - (tempsize/2) + textSize());
      
      
      
      //new item
      
      tempx = width*3/4;
     
      
      rectMode(CENTER);
      fill(player.newitem.col);
      rect(tempx,tempy,tempsize,tempsize);
      //text
      textAlign(LEFT); 
      fill(0);
      text('New: ', tempx - (tempsize/2) + textSize()/5,tempy  - (tempsize/2) - textSize());
      text(player.newitem.statText,tempx - (tempsize/2) + textSize()/5,tempy  - (tempsize/2) + textSize());
      
      
      
      pickcurButton.show();
      picknewButton.show();
      
      pop();
      break;
  }
  
  push();
  rect(0,height - (height/20), width, height/20);
  fill (204,255,153);
  rect(0,height - (height/20), (player.xp/player.xpmax) * width, height/20); 
  textSize(15);
  fill(0);
  textAlign(CENTER);
  text('Lv ' + player.level + '    XP: ' + player.xp + ' / ' + player.xpmax, width/2, height - textSize()*1.5/5);
  pop();
  
}


function keyPressed() {
  if (keyCode == 73) {
    if (scene == 'character') {
      resetButtons();
      
      battleButton.show();
      
      scene = 'menu';
    } else {scene = 'character'; resetButtons(); player.checkUI();}
    
  }
  
  
  
  
  
  
} //Keypressed //






function startBattle(id, lvl) {
  
  
  
  
  switch (id) {
    case 1:
      enemy = new Enemy(lvl, int(random(5,15)), int(random(30,70)), int(random(1,5)), int(random(1,10)), int(random(0,15)), [3,2,1]) ;
      
      enemy.checkLevel();
      
      
  }
  
  p_battle_txt = 'Player \n' + 'Lv ' + player.level + '\n';
  e_battle_txt = 'Enemy \n' + 'Lv ' + enemy.level + '\n';
  
  resetButtons();
  scene = 'battle';
  showButtons('battle');
  
}


function fight() {
  
  enemy.takeDamage(player.totalDmg, player);
  player.takeDamage(enemy.dmg);
  
  
  
  p_battle_txt = 'Player \n' + 'Lv ' + player.level + '\n';
  e_battle_txt = 'Enemy \n' + 'Lv ' + enemy.level + '\n';
  
}


function resetButtons() {
  for (i =0; i < BattleButtons.length;i++) {
    BattleButtons[i].hide();
  }
  
  for (i =0 ;i < MenuButtons.length;i++) {
    MenuButtons[i].hide();
  }
  
  for (i =0 ;i < LootButtons.length;i++) { 
    LootButtons[i].hide();
  }
  
  for (i =0 ;i < BattleSelectButtons.length;i++) { 
    BattleSelectButtons[i].hide();
  }
  
}


function showButtons(type) {
  list = [];
  switch(type) {
    case 'battle':
      list = BattleButtons;
      break;
      
    case 'menu':
      list = MenuButtons;
      break;
      
    case 'battleselect':
      list = BattleSelectButtons;
      break;
  }
  
  for (i = 0; i < list.length; i++) {
    list[i].show();
  }
  
}














