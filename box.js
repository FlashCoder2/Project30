class Box extends BaseClass{
  constructor(x,y) {
    super(x,y,50,50);
    this.Visibility = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility -= 5;
      tint(255,this.Visibility);
      rect(this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
};