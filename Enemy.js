class Enemy { //need to add dmaage ranges
  
  constructor(level, dmg, hp, def, xp, gold, statPriority) { //( , loot) ?
    this.level = level;
    this.dmg = dmg;
    this.hp = hp;
    this.hpmax = hp;
    this.def = def;
    this.xp = xp;
    this.gold = gold;
    this.statPriority = statPriority; //dmg, hp, def amount
    
    
  }// EO constructor
  
  
  
  takeDamage(val, player) {
    
    this.tempVal = val - (this.def/3);
    if (this.tempVal < val*0.4) {
      this.tempVal = val*0.4;
    }
    
    if (this.tempVal < 1) {this.tempVal = 1;}
    
    this.hp -= int(this.tempVal);
    
    if (this.hp <= 0) {
      this.dead(player);
    }
    
    
  }
  
  
  
  
  
  dead(p) {
    
    if (random(0,100) >= 60) {  //swiotch
      p.loot(this.level,this.xp,this.gold);
    } else {p.win(this.xp,this.gold);
           }    
    
    
  }
  
  
  checkLevel() {
    this.addhp = 0;
    
     if (this.level <= 35) {this.addhp += (this.level-1)*this.statPriority[1]*(10);}
    
    else {//lvl 35+
      this.addhp += (35-1) * this.statPriority[1]*(10);
      
      //lvl 36-60
        if (this.level <= 60) {
          
          
          
          for (i = 0; i < this.level - 35; i++) {
            //dont think hp is coded correctly
            this.abhp = 10+((this.level - 35)*1); if (ab > 35) {ab = 35;}
            this.addhp += this.statPriority[1] * (ab);
            
          } 
          
        }  else { 
          
          for (i = 0; i < 60 - 35; i++) {
            this.abhp = 10+((this.level - 35)*4); if (ab > 55) {ab = 55;}
            this.addhp += this.statPriority[1] * (ab);
            
            }
          
                  //lvl 60-66
            if (this.level <= 65) {
              for (i = 0; i < this.level - 60; i++) {
                
                this.abhp = 10+((this.level - 60)*4); if (ab > 55) {ab = 55;}
                this.addhp += this.statPriority[1] * (ab);

              } 

            }  else { 

              for (i = 0; i < 65 - 60; i++) {
                this.abhp = 10+((this.level - 35)*4); if (ab > 55) {ab = 55;}
                this.addhp += this.statPriority[1] * (ab);

                }
                            //lvl 66-70
                  if (this.level <= 70) {
                    for (i = 0; i < this.level - 35; i++) {
                      //dont think hp is coded correctly
                      this.abhp = 10+((this.level - 65)*5); if (ab > 105) {ab = 105;}
                      this.addhp += this.statPriority[1] * (ab);

                    } 

                  }  
           
            
              
          
          
                }
               }
            
          }
          
          
         
    
    this.xp = this.xp * int(random(1.1,1.3))^(this.level-1);
    this.gold = this.gold * int(random(1.1,1.3))^(this.level-1);
    
    
    this.hpmax += this.addhp;
    this.hp = this.hpmax;
    
    this.dmg += this.statPriority[0] * (this.level-1);
    this.def += this.statPriority[2] * (this.level-1);
    
    
  }
  
  
  
  
} //EOF