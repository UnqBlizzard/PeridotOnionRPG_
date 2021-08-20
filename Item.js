
class Item {
  constructor(name,dmg,hp,def,type, rarity) {
    this.name = name;
    this.dmg =dmg;
    this.hp = hp;
    this.def = def;
    this.type = type;
    this.rarity = rarity;
    this.size = 80;
    this.col = color(100);
    this.x = 0;
    this.y=0;
    //wokring out ypos for display
    this.d = height - (4*this.size);
    this.l = this.d/7;
    this.m = 2*this.l;
    this.statText = this.name;
    this.GenerateText();
    this.updatePos();
  } //ed of constructor
  
  
  
  updatePos() {
    this.a = 1;
    
    switch(this.type) {
        
      case 'weapon':
        this.x = width/4;
        this.a = 2;
        this.y = this.m + (this.size * 1 / 2) + (this.l * (this.a-1)) + (this.size * (this.a-1));
        break;
        
      case 'head':
        this.x = width/2;
        this.a = 1;
        this.y = this.m + (this.size * 1 / 2) + (this.l * (this.a-1)) + (this.size * (this.a-1));
        break;
      case 'chest':
        
        this.x = width/2;
        this.a = 2;
        this.y = this.m + (this.size * 1 / 2) + (this.l * (this.a-1)) + (this.size * (this.a-1));
        break;
      case 'legs':
        this.x = width/2;
        this.a = 3;
        this.y = this.m + (this.size * 1 / 2) + (this.l * (this.a-1)) + (this.size * (this.a-1));
        break;
      case 'boots':
        this.x = width/2;
        this.a = 4;
        this.y = this.m + (this.size * 1 / 2) + (this.l * (this.a-1)) + (this.size * (this.a-1));
        break;
      case 'offhand':
        this.x = 3*width/4;
        this.a = 2;
        this.y = this.m + (this.size * 1 / 2) + (this.l * (this.a-1)) + (this.size * (this.a-1));
        break;
    }
    
    switch (this.rarity) {
      case 'common':
        this.col = color(200);
        break;
      
      case 'uncommon':
        this.col = color(102,255,102);
        break;
        
      case 'rare':
        this.col = color(102,255,255);
        break;
        
      case 'epic':
        this.col = color(178,102,255);
        break;
        
        
      case 'legendary':
        this.col = color(255,102,102);
        break;
    }
    
    
  } //end of posupdate
  
  
  show() {
    push();
    rectMode(CENTER);
    fill(this.col);
    rect(this.x,this.y,this.size,this.size);
    //text
    textAlign(LEFT); 
    fill(0);
    text(this.statText,this.x - (this.size/2) + textSize()/5,this.y  - (this.size/2) + textSize());
    pop();
  } //end of show
  
  
  
  GenerateText() {
    this.statText = this.name + "\n";
    if (this.dmg != 0) {
      this.statText += "+ " + this.dmg + " dmg \n";
    } 
    
    if (this.hp !=0) {
      this.statText += "+ " + this.hp + " hp \n";
    }
    
    if (this.def !=0) {
      this.statText += "+ " + this.def + " def \n";
    }
    
  }
  
  
  
  check() {
    this.GenerateText();
    this.updatePos();
  }
  
  
  
  
  
  
} //end of class