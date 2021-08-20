class Player {
  constructor() {
    this.weapon = new Item('hand', 1,0,0, 'weapon', 'common') //name,dmg,hp,def, type
    this.head = new Item('head', 0, 0, 0, 'head', 'common');
    this.chest = new Item('chest', 0, 0, 0, 'chest', 'common');
    this.legs = new Item('legs', 0, 0, 0, 'legs', 'common');
    this.boots = new Item('boots', 0, 0, 0, 'boots', 'common');
    this.offhand = new Item('offhand', 0, 0, 0, 'offhand', 'common');
    
    this.equipment = [];
    this.equipment.push(this.weapon);
    this.equipment.push(this.head);
    this.equipment.push(this.chest);
    this.equipment.push(this.legs);
    this.equipment.push(this.boots);
    this.equipment.push(this.offhand);
    
    //base stats
    this.dmg = 10;
    this.hp = 70;
    this.hpmax = this.hp;
    this.def = 2;
    
    this.level = 1;
    this.xp = 0;
    this.xpmax = 50;
    
    this.gold = 0;
    
    this.statTotals();
  }
  
  
  
  
  show(stuff) {
    switch(stuff) {
      case ('items'):
        this.weapon.show();
        this.head.show();
        this.chest.show();
        this.legs.show();
        this.boots.show();
        this.offhand.show();
        //totals
        push();
        textAlign(LEFT); 
        fill(0);
        this.statText = 'Totals \n' + 'Damage: ' + this.totalDmg + '\n'+'Health: ' + this.totalHp + '\n'+'Defence: ' + this.totalDef;
        text(this.statText,this.weapon.x - (this.weapon.size/2) +         textSize()/5,this.legs.m + (this.legs.size * 1 / 2) + (this.legs.l * (this.legs.a-1)) + (this.legs.size * (this.legs.a-1)));
        pop();
        
        
    }
    
    
    
    
  } //end of show()
  
  
  statTotals() {
    this.equipment = [];
    this.equipment.push(this.weapon);
    this.equipment.push(this.head);
    this.equipment.push(this.chest);
    this.equipment.push(this.legs);
    this.equipment.push(this.boots);
    this.equipment.push(this.offhand);
    
    this.tempDmg = 0;
    this.tempHp = 0;
    this.tempDef = 0;
    
    for (this.tempi = 0; this.tempi < this.equipment.length; this.tempi++) {
      this.tempDmg += this.equipment[this.tempi].dmg;
      this.tempHp += this.equipment[this.tempi].hp;
      this.tempDef += this.equipment[this.tempi].def;
    }
    
    
    this.totalDmg = this.dmg + this.tempDmg;
    this.totalHp = this.hpmax + this.tempHp;
    this.totalHpmax = this.totalHp;
    this.totalDef = this.def + this.tempDef;
    
    
  }
  
  
  win(xp, gold) {
    
    this.xp += xp;
    this.gold += gold;
    
    if (this.xp >= this.xpmax) {
      this.levelup();
      
    }
    
    this.totalHp = this.totalHpmax;
    resetButtons();
    scene = 'menu';
  }
  
  loot(lvl, xp, gold) {
    
    this.newitem = loot.get(lvl);
    switch(this.newitem.type) {
      case 'weapon':
        this.curitem = this.weapon;
        break;
      case 'head':
        this.curitem = this.head;
        break;
      case 'chest':
        this.curitem = this.chest;
        break;
      case 'legs':
        this.curitem = this.legs;
        break;
      case 'boots':
        this.curitem = this.boots;
        break;
      case 'offhand':
        this.curitem = this.offhand;
        break;
      
    }
    
    this.xp += xp;
    this.gold += gold;
    
    
    resetButtons();
    scene = 'loot';
  }
  
  claimLoot(id) {
    if (id == 0) {
      this.win(0,0);
    } else {
      switch(this.newitem.type) {
        case 'weapon':
          this.weapon = this.newitem;
        break;
      case 'head':
        this.head = this.newitem;
        break;
      case 'chest':
        this.chest = this.newitem;
        break;
      case 'legs':
        this.legs = this.newitem;
        break;
      case 'boots':
        this.boots = this.newitem;
        break;
      case 'offhand':
        this.offhand = this.newitem;
        break;
      }
    }
    
    this.statTotals();
    this.win(0,0);
    
  }
  
  takeDamage(val) {
    this.tempVal = val - (this.totalDef/3);
    
    if (this.tempVal < val*0.4) {
      this.tempVal = val*0.4;
    }
    if (this.tempVal < 1) {this.tempVal = 1;}
    
    this.totalHp -= int(this.tempVal);
    
    if (this.totalHp <= 0) {
      resetButtons();
      this.totalHp = this.totalHpmax;
      scene = "menu";
      
    }
  }
  
  levelup() {
    
    this.level += 1;
    this.xp -= this.xpmax;
    
    this.xpmax = this.xpmax*1.4; //neeed to change!
    
    if (this.level <= 35) {this.addhp = 2*(10);}
    
    else if (this.level <= 60) {this.abhp = 10+((this.level - 35)*1); if (ab > 35) {ab = 35;} this.addhp = 2* (ab);}
    
    else if (this.level <= 65) {this.abhp = 10+((this.level - 60)*4); if (ab > 55) {ab = 55;} this.addhp = 2* (ab);}
    
    else if (this.level <= 70) {this.abhp = 10+((this.level - 65)*5); if (ab > 105) {ab = 105;} this.addhp = 2* (ab);}
    
    this.hpmax += this.addhp;
    this.hp = this.maxhp;
    
    this.dmg += 3;
    this.def +=1;
    
    this.statTotals(); ////////////////////////
    
    
    
  }
  
  checkUI() {
    for (var i = 0; i < this.equipment; i++) {
      this.equipment[i].check();
    }
    
    this.statTotals();
    
    
  }
  
  
  
}