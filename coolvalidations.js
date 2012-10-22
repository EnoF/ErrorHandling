function CoolValidations(){
	
	function isNullOrUndefined(objectToTest){
	    return objectToTest === undefined || objectToTest === null;
	}
	
	function notifyNoNoCoolObject(originalException){
	    console.info("There is no NoCoolObject provided: " + originalException);
	}
	
	this.makeTheObjectCool = function(notCoolObject){
	    var coolObject;
	    
	    if(isNullOrUndefined(notCoolObject)){
	        notifyNoNoCoolObject("The provided object is undefined");
	        return null;
	    }
	    
	    if(isNullOrUndefined(notCoolObject.notCoolFoo)){
	        notifyNoNoCoolObject("The provided notCoolFoo is undefined");
	        return null;
	    }
	    
	    if(isNullOrUndefined(notCoolObject.notCoolBar)){
	        notifyNoNoCoolObject("The provided notCoolBar is undefined");
	        return null;
	    }
	    
	    coolObject = {
	        coolFoo : notCoolObject.notCoolFoo,
	        coolBar : notCoolObject.notCoolBar
	    };
	    
	    return coolObject;
	}
	
}