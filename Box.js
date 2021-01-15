class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
       }
       else{ 
         push();
         World.remove(world, this.body);
         
         this.visibility = this.visibility - 5;
         //tint(255, this.Visiblity);
         console.log(this.visibility);
         //image(this.body.position.x, this.body.position.y, 50, 50);
         pop();
        }
      }
      score(){
        if(this.visibility<0 && this.visibility >-105){
          score++;
        }
      }
    }
  ;
  