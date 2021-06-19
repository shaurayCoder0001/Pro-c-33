class Snow{
	constructor(x,y,r)
	{
		var options={
		'restitution':0.3,
        'friction':0.2,
        'density':0.5,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("snow4.webp")
        this.image=loadImage("snow5.webp")
    
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
    
	{
		var SnowPos=this.body.position;	
		push()
		translate(SnowPos.x, SnowPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
        image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}