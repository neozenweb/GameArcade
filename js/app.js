// Enemies our player must avoid
var Enemy = function(col,row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = col * 101;
    this.y = row * 75;
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   
   var plpos = Math.ceil(player.y /83);
    
    if((this.x) < 601)
                this.x = this.x + dt * this.x + Math.random();
            else
                this.x =90 + dt * this.x + Math.random(); 
   
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Player class with input handler, update and render methods
var Player = function(spr) {
    
    this.sprite = spr;
    this.x = 2 * 101;
    this.y = 5 * 83;
   
};

// Update the player's position, required method for game

Player.prototype.update = function(dt) {
           var b1pos,b2pos,b3pos,pposx,pposy;
            b1pos = Math.ceil(bug1.x / 101);
            b2pos = Math.ceil(bug2.x /101);
            b3pos = Math.ceil(bug3.x /101);
            pposx = Math.ceil(this.x /101);
            pposy = Math.ceil(this.y /83);
    
    var animfrm;
   if(pposy == 0) 
       {    
            var popText= "Congratulations!! You Won the Game ... ";
           popText += "<p> Another Game? " + "<button id='yesbtn' onClick='javascript:window.location.reload();'>Yes</button><button id='nobtn' onClick='javascript:window.close();'>No</button>";
           var canv =  window.document.getElementsByTagName("canvas")[0];
           var  ct = canv.getContext("2d");
           ct.clearRect(0,0,canv.width,canv.height);
           ct.fillStyle="#FF0000";
           ct.fillRect(0,0,canv.width,canv.height);
           ct.font = "30px Arial";
            ct.fillText(popText,10,50);
           document.getElementById("popupmsg").innerHTML = popText;
           document.getElementById("popup").style.display = "block";
           document.getElementById("modcont").style.display = "block";
		
           
       }
   if((pposx == b1pos && pposy == 3) ||(pposx == b2pos && pposy == 2 ) || (pposx == b3pos && pposy == 1 ))
       {
        
           this.x = 2*101;
           this.y = 5*83;
           Player.prototype.update();
           
       }
       
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player handleInput method

Player.prototype.handleInput = function(keyCode){
   
    switch(keyCode)
    {
    
        case 'left' : if(this.x > 101) 
                    this.x = this.x - 101;
                    break;
        case 'right': if(this.x < 606) 
                    this.x = this.x + 101;
                  break;
        case 'up':  if(this.y > 0) 
                      this.y = this.y - 83;
                    break;
                
        case 'down': if(this.y < 415) 
                    this.y = this.y + 83;
                    break;
        default:
                    break;
    }
    
    Player.prototype.update();
    
}






// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var bug1 = new Enemy(1,1);
var bug2 = new Enemy((1+Math.random()),2);
var bug3 = new Enemy((1+Math.random()),3);
var allEnemies = [bug1,bug2,bug3];
var player = new Player('images/char-boy.png');
var timer1;

//This starts the enemy on loading the game
document.addEventListener('load', function(l) {
   // bug1.update();
    //bug2.update();
    //bug3.update();
    
    
});
//This event listens if the new player sprite is clicked

document.addEventListener('click', function(l) {
    //alert("X is " + this.x +" and Y is  "+this.y);
    
});


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

