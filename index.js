 "use strict";

	//Work in Progress...
	// Stay Tuned

    module.exports = function callGA(param1, param2) {
   	console.log("param 1 :", param1);
 	console.log("param 2 :", param2);
	console.log("This works!")
	
	  return new Promise((resolve, reject) => {
		if(param1 == "stop"){
			reject('sxxtop command');
			return callback('stop command');
		}else{
			resolve('siucc');
			return callback(null, 'siucc');
		}
   	 	});



   
	}


