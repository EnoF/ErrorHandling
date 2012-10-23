describe('async try catch', function(){
	
	var aSync = new ASync();
	
	beforeEach(function(){
		aSync.setState("SAD");
	});
	
	it('should throw an error when try catching outside the async function', function(){
		// Given
		var deferred = aSync.badTryCatchThen();
		
		// When 
		expect(function(){
			deferred.resolve();
		
		// Then
		}).toThrow("Uncaught exception");
	});
	
	it('should throw an error when try catching inside the async function', function(){
		// Given
		var deferred = aSync.coolTryCatchThen();
		
		// When
		deferred.resolve();
		
		// Then
		expect(aSync.getState()).toEqual("COOL");
	});
	
});
