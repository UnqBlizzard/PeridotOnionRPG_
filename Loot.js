class Loot {
  
  contructor() {
    this.name = '';
    this.dmg =0;
    this.hp = 0;
    this.def = 0;
    this.type = '';
    this.rarity = '';
    this.mult = 1;
    
    this.defmult = 0;
    this.defmin = 0;
    this.defmax =0;
    
    this.dmgmult = 0;
    this.dmgmin = 0;
    this.dmgmax =0;
    
    this.hpmult = 0;
    this.hpmin = 0;
    this.hpmax =0;
  }
  
  
  
  get(level) {
    
    
    //reset 
    
    this.name = '';
    this.dmg =0;
    this.hp = 0;
    this.def = 0;
    this.type = '';
    this.rarity = '';
    this.mult = 1;
    
    this.defmult = 0;
    this.defmin = 0;
    this.defmax =0;
    
    this.dmgmult = 0;
    this.dmgmin = 0;
    this.dmgmax =0;
    
    this.hpmult = 0;
    this.hpmin = 0;
    this.hpmax =0;
    
    //make new
    
    
    this.level = level;
    this.getType();
    this.getRarity();
    this.getStats();
    
    
    
    return new Item(this.type, this.dmg, this.hp, this.def, this.type, this.rarity);
    
    
  }
  
  
  getType() {
    this.tempr = int(random(0,100));
    
    if (this.tempr <= 20) {
      this.type ='head';
      this.name = 'helmet';
    } else if (this.tempr <= 40) {
      this.type = 'boots';
      this.name = 'boots';
    } else if (this.tempr <= 60) {
      this.type = 'legs';
      this.name = 'legs';
    } else if (this.tempr <= 70) {
      this.type = 'chest';
      this.name = 'chest';
    } else if (this.tempr <= 85) {
      this.type = 'weapon';
      this.name = 'legs';
    } else if (this.tempr <= 100) {
      this.type = 'offhand';
      this.name = 'offhand';
    }
    
    
  }
  
  
  getRarity() {
    this.tempr = int(random(0,100));
    if (this.tempr <= 50) {
      this.rarity = 'common';
      this.mult = 1;
    } else if (this.tempr <= 75) {
      this.rarity = 'uncommon';
      this.mult = 1.1;
    } else if (this.tempr <= 90) {
      this.rarity = 'rare';
      this.mult = 1.25;
    } else if (this.tempr <= 98) {
      this.rarity = 'epic';
      this.mult = 1.5;
    } else if (this.tempr <= 100) {
      this.rarity = 'legendary';
      this.mult = 1.75;
    } 
    //if armor is rare or higher, 2nd stat is hp, r *0.2, e *0.3, l * 0.5;
    
  }
  
  
  getStats() {
    
    
    switch(this.type) {
        
      case 'head':
        this.defmult = 0.6; 
        this.defmin = 3 + int(0.7 * this.level * log(this.level));
        this.defmax = 3 + int(1 * this.level * log(this.level));
        break;
      
      case 'chest':
        this.defmult = 1; 
        this.defmin = 3 + int(0.7 * this.level * log(this.level));
        this.defmax = 3 + int(1 * this.level * log(this.level));
        break;
      
      case 'legs':
        this.defmult = 0.6; 
        this.defmin = 3 + int(0.7 * this.level * log(this.level));
        this.defmax = 3 + int(1 * this.level * log(this.level));
        break;
        
      case 'boots':
        this.defmult = 0.6; 
        this.defmin = 3 + int(0.7 * this.level * log(this.level));
        this.defmax = 3 + int(1 * this.level * log(this.level));
        break;
        
        //change for weaps
      case 'weapon':
        this.dmgmult = 1; 
        this.dmgmin = 3 + int(0.7 * this.level * log(this.level));
        this.dmgmax = 3 + int(1 * this.level * log(this.level));
        break;
        
      case 'offhand':
        this.dmgmult = 0.6; 
        this.dmgmin = 3 + int(0.7 * this.level * log(this.level));
        this.dmgmax = 3 + int(1 * this.level * log(this.level));
        break;
        
        
        
        
        
    }
    
    this.dmg = int(random(this.dmgmin, this.dmgmax) * this.dmgmult * this.mult);
    this.def = int(random(this.defmin, this.defmax) * this.defmult * this.mult);
    this.hp = int(random(this.hpmin, this.hpmax) * this.hpmult * this.mult);
    
    
    
    
  }
  
  
  
  
  
  
}