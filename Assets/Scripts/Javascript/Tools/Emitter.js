function Emitter(position, velocity, spread, rate, max){

	this.particles = [];
	this.position = position || new Vector(); // POSITION
	this.velocity = velocity || new Vector(); // ACCELERATION
	this.spread = spread || Math.PI / 32; // ANGLES POSSIBLE DE DIRECTION
	this.color = 'white'; // COULEUR DES PARTICULES
	this.rate = rate || 5; // NOMBRE PARTICULE PAR FRAME
	this.particlesMax = max || 200000000; // NOMBRE MAX DE PARTICULES
}

Emitter.prototype.emitParticles = function(){
	
	var count = this.rate;
	
	while(count--){

		if (this.particles.length < this.particlesMax) {
			var angle = this.velocity.getAngle() + this.spread;
			var position = new Vector(this.position.x, this.position.y);
			var velocity = this.velocity.fromAngle(angle);	

			this.particles.push(new Particles(position, velocity, this.color));
		} else {
			return;
		}
	}
}

Emitter.prototype.update = function(){

	this.emitParticles();

	for(var particle in this.particles){
		this.particles[particle].update();
		this.particles[particle].render();
	}
}

function Particles(position, velocity, color){
	this.position = position;
	this.velocity = velocity;
	this.color = color;
}

Particles.prototype.update = function(){
	 // console.log(this.velocity);
	 this.position.add(this.velocity);
};

Particles.prototype.render = function(){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.position.x, this.position.y, 1, 1);
}