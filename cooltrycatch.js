function CoolTryCatch(){
	
    function isNullOrUndefined(objectToTest) {
	    return (objectToTest === undefined || objectToTest === null) && true;
	}
	
	function notifyNoNoCoolObject(originalException){
	    console.info("There is no NoCoolObject provided: " + originalException);
	}
	
	this.makeTheObjectCool = function(notCoolObject){
	    var coolObject;
	    try{
	    
		    if(isNullOrUndefined(notCoolObject)){
		        throw new Error("The provided object is undefined");
		    }
		    
		    if(isNullOrUndefined(notCoolObject.notCoolFoo)){
		        throw new Error("The provided notCoolFoo is undefined");
		    }
		    
		    if(isNullOrUndefined(notCoolObject.notCoolBar)){
		        throw new Error("The provided notCoolBar is undefined");
		    }
		    
		    coolObject = {
		        coolFoo : notCoolObject.notCoolFoo,
		        coolBar : notCoolObject.notCoolBar
		    };
            
	    }catch(noCoolObjectProvided){
	    	notifyNoNoCoolObject(noCoolObjectProvided);
	    	return null;
	    }
	    
	    return coolObject;
	}
	
}