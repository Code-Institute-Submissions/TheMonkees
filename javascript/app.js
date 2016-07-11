angular.module("bandApp",["ngRoute","bandControllers","bandDirectives", "bandServices"])
.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "templates/home.html",
		controller: "HomeController"
	})
	.when("/the-band",{
		templateUrl: "templates/the-band.html",
		controller: "TheBandController"
	})
	
	.when("/news",{
		templateUrl: "templates/news.html",
		controller: "NewsController"
	})
	.when("/music",{
		templateUrl: "templates/music.html",
		controller: "MusicController"
	})	
	.when("/book-band",{
		templateUrl: "templates/book-band.html",
		controller: "BookBandController"
	})
	// Will use it if need a separate page
	//.when("/upcoming-gigs",{
	//	templateUrl: "templates/upcoming-gigs.html",
	//	controller: "UpcomingGigsController"
	//})
	.when("/contact",{
		templateUrl:"templates/contact.html",
		controller:"ContactController"
	})
	.otherwise({redirectTo: '/'});
})