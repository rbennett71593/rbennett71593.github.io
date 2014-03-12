Person = function(nombre, old, social, heavy) {
	
	this.name = nombre
	this.age = old
		
	var ssn = social
	var weight = heavy
	
	this.gainWeight = function(lbs){
		weight += lbs
	}
	this.getSSN = function(){
		return ssn
	}
	this.getWeight = function(){
		return weight
	}

}

Person.prototype.birthday = function(){
	this.age += 1
	return this.age
}

