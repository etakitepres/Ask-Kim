var sentencegenerator = {
sentence            : function() {
		return 	this.randomItemFrom(this.phrases);
	},
	randomItemFrom		: function(array) {
		return array[(this.randomNumber(0, (array.length - 1) ))];
	},
	randomNumber		: function(minNumber, maxNumber) {
		
		if ( minNumber > maxNumber ) {
	        minNumber								= 1;
	        maxNumber								= 10;
		}

	    var randomNumber							= (Math.floor(Math.random() * maxNumber)) + minNumber;
	    return randomNumber;
	},
	
	
	phrases             : [
			"&quot;Is someone speaking?&quot;",
			"&quot;Where's Kanye?&quot;",
			"&quot;I've had such a hard day...I need a photoshoot.&quot;",
			"&quot;Are you famous?&quot;",
			"&quot;The beach is my home.&quot;",
			"&quot;I'm misunderstood.&quot;",
			"&quot;I am Armenian.&quot;",
			"&quot;You're wearing the wrong foundation color.&quot;",
			"&quot;I buy myself a gift every year, so this year I bought everything I wanted.&quot;",
			"&quot;My sisters do enough drinking to kind of fill up the whole family.&quot;",
			"&quot;I had dinner with Obama once.&quot;",
			"&quot;Leggings killed velour sweat suits!&quot;",
			"&quot;I didn't love school.&quot;",
			"&quot;I'm a very private person.&quot;"	
	],
};
	