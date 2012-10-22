describe("coolvalidations error handling", function(){
	
	var coolValidations = new CoolValidations();
	
	it('should return null when we provide no cool object with not cool foo and not cool bar', function(){
		// Given
		var noCoolObject = {
				notCoolFoo : "FOO",
				notCoolBar : "BAR"
			},
			result;
		
		// When
		result = coolValidations.makeTheObjectCool(noCoolObject);
		
		// Then
		expect(result).toEqual({
			coolFoo : "FOO",
			coolBar : "BAR"
		});
	});
	
	it('should return null when we provide no cool object as undefined', function(){
		// Given
		var noCoolObject = undefined,
			result;
		
		// When
		result = coolValidations.makeTheObjectCool(noCoolObject);
		
		// Then
		expect(result).toEqual(null);
	});
	
	it('should return null when we provide no cool object with only not cool foo', function(){
		// Given
		var noCoolObject = {
				notCoolFoo : "FOO"
			},
			result;
		
		// When
		result = coolValidations.makeTheObjectCool(noCoolObject);
		
		// Then
		expect(result).toEqual(null);
	});
	
	it('should return null when we provide no cool object with only not cool bar', function(){
		// Given
		var noCoolObject = {
				notCoolBar : "BAR"
			},
			result;
		
		// When
		result = coolValidations.makeTheObjectCool(noCoolObject);
		
		// Then
		expect(result).toEqual(null);
	});
	
});
