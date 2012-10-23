function ASync(){
	
	var _state = "SAD";
	
	this.getState = function(){
		return _state;
	};
	
	this.setState = function(state){
		_state = state;
	};
	
	this.badTryCatchThen = function(){
		var deferred = $.Deferred();
		
		try{
			deferred.then(function(){
				throw new Error("Uncaught exception");
			});
		}catch(exception){
			throw new Error("Caught exception");
		}
		
		return deferred;
	};
	
	this.coolTryCatchThen = function(){
		var deferred = $.Deferred();
		
		deferred.then(function(){
			try{
				throw new Error("COOL");
			}catch(exception){
				_state = exception.message;
			}
		});
		
		return deferred;
	};
}
