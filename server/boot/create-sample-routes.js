loopback = require('loopback');

module.exports = function(app){
	app.dataSources.mongo.automigrate('Route', function (err) {
		if (err) throw err;

		app.models.Route.create(
			[{
				id: 1,
				user_id: 1,
				depart_time: 0,
				from: loopback.GeoPoint({lat: -8.033553399999999, lng: -34.91895969999999}),
				to: loopback.GeoPoint({lat: -8.016199799999999, lng: -34.9503686})
			},
			{
				id: 2,
				user_id: 1,
				depart_time: 0,
				from: loopback.GeoPoint({lat: -8.033553399999999, lng: -34.91895969999999}),
				to: loopback.GeoPoint({lat: -8.016199799999999, lng: -34.9503686})
			}]
		);
	});
}