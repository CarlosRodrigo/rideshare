request = require('request');

module.exports = function(Route) {
	Route.getCost = function(RouteId, cb){
		Route.findById(RouteId, function (err, instance){
			var from = instance.from.lat + "," + instance.from.lng;
			var to = instance.to.lat + "," + instance.to.lng;
			requrl = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=|"+from+"&destinations=|" + to;

			request(requrl, function (err, res, body){
				if(!err && res.statusCode == 200){
					data = JSON.parse(body);
					var distance = data.rows[0].elements[0].distance.value;
					var duration = data.rows[0].elements[0].duration.value;
					cb(null, distance + 5*duration);
				}
			});
		});
	};
	
	Route.remoteMethod('getCost',
	{
		http: {path: '/getcost', verb: 'get'},
		accepts: {arg: 'id', type: 'number', http: {source: 'query'}},
		returns: {arg: 'cost', type: 'number'} 
	}
	);
	
};
