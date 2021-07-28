class paper{
	constructor(x,y,r){
		var options = {
		 'density':1.2,
		 'friction': 0,
		 'restitution':0.3
		};
		
		this.x=x;
		this.y=y;
		this.r=r;

        this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-70/2), options);
		World.add(world, this.body);
	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//draw the ellipse here to display the rubber ball
			image(this.image,0,0,this.r,this.r);
			pop()
	}

}