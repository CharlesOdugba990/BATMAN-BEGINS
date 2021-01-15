class Umbrella {
      
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 25;
         this.body = Matter.Bodies.circle(100,350, radius, options);
         this.width = radius;
         this.height = radius;
         World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
        
         var man = createSprite(pos.x+90, pos.y-20,175,175)
         man.addAnimation("lable",man_image)
         man.scale = 0.45
         //image(man_image, pos.x-90, pos.y-20,175,175);

    }
}